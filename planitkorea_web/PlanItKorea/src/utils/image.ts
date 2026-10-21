// 이미지 URL 처리 (Supabase Storage 공개 URL / 기존 로컬 /image 경로 / 없음)
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:4040";

export const NO_IMAGE = "/images/logo.png";

// - http(s):// 로 시작하면 (Supabase Storage 등) 그대로 사용
// - 상대 경로면 WAS 의 /image/ 정적 경로로 해석 (기존 업로드 호환)
// - 비어 있으면 대체 이미지
export function resolveImageUrl(path?: string | null): string {
  if (!path) return NO_IMAGE;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return `${API_BASE}/image/${path.replace(/^\/+/, "")}`;
}

// <img onError={onImageError}> : 로드 실패 시 대체 이미지로 교체
export function onImageError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.src = NO_IMAGE;
}
