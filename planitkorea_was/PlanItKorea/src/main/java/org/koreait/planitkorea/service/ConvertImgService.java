package org.koreait.planitkorea.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

/**
 * 이미지 저장 서비스
 * - supabase.url / supabase.service-key 가 설정되어 있으면 Supabase Storage 에 업로드하고 공개 URL 을 반환
 * - 설정이 없으면 기존처럼 WAS 의 image 폴더에 저장하고 상대 경로를 반환 (프론트가 /image/ 로 해석)
 */
@Service
public class ConvertImgService {
    @Value("${user.dir}")
    private String projectPath;

    @Value("${supabase.url:}")
    private String supabaseUrl;

    @Value("${supabase.service-key:}")
    private String supabaseServiceKey;

    @Value("${supabase.bucket:}")
    private String supabaseBucket;

    // 한 버킷을 여러 프로젝트가 공유할 때 프로젝트별로 폴더를 분리하기 위한 접두어
    @Value("${supabase.path-prefix:planitkorea}")
    private String pathPrefix;

    private final HttpClient httpClient = HttpClient.newHttpClient();

    private boolean isSupabaseEnabled() {
        return !supabaseUrl.isBlank() && !supabaseServiceKey.isBlank() && !supabaseBucket.isBlank();
    }

    public String convertImgFile(MultipartFile file, String subPath) {
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.isEmpty()) {
            throw new IllegalArgumentException("Invalid file: file name is missing");
        }

        if (isSupabaseEnabled()) {
            return uploadToSupabase(file, originalFilename, subPath);
        }
        return saveToLocal(file, originalFilename, subPath);
    }

    // Supabase Storage 는 한글/공백 키를 허용하지 않으므로 UUID + 확장자만 사용
    private String uploadToSupabase(MultipartFile file, String originalFilename, String subPath) {
        String objectPath = (pathPrefix.isBlank() ? "" : pathPrefix + "/")
                + subPath + "/" + UUID.randomUUID() + extensionOf(originalFilename);
        String base = supabaseUrl.replaceAll("/+$", "");
        String contentType = file.getContentType() != null ? file.getContentType() : "application/octet-stream";

        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(base + "/storage/v1/object/" + supabaseBucket + "/" + objectPath))
                    .header("Authorization", "Bearer " + supabaseServiceKey)
                    .header("apikey", supabaseServiceKey)
                    .header("Content-Type", contentType)
                    .header("x-upsert", "false")
                    .POST(HttpRequest.BodyPublishers.ofByteArray(file.getBytes()))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() / 100 != 2) {
                throw new RuntimeException("Supabase upload failed: " + response.statusCode() + " " + response.body());
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file: " + e.getMessage(), e);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Upload interrupted", e);
        }

        // 버킷이 public 이어야 이 URL 로 바로 표시할 수 있음
        return base + "/storage/v1/object/public/" + supabaseBucket + "/" + objectPath;
    }

    private String saveToLocal(MultipartFile file, String originalFilename, String subPath) {
        String newImgName = UUID.randomUUID().toString() + "_" + originalFilename;

        String rootPath = projectPath + "/image/";
        String filePath = subPath + "/" + newImgName;
        File f = new File(rootPath + subPath);

        if (!f.exists() && !f.mkdirs()) {
            throw new RuntimeException("Failed to create directory: " + f.getAbsolutePath());
        }

        Path uploadPath = Paths.get(rootPath + filePath);

        try {
            Files.write(uploadPath, file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException("Failed to save file: " + e.getMessage(), e);
        }
        return filePath;
    }

    private String extensionOf(String filename) {
        int dot = filename.lastIndexOf('.');
        if (dot < 0 || dot == filename.length() - 1) {
            return "";
        }
        return filename.substring(dot).toLowerCase().replaceAll("[^a-z0-9.]", "");
    }
}
