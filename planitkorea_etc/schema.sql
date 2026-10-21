-- PlanItKorea DDL (엔티티 기준으로 작성, MySQL 8)
-- 테이블/컬럼명은 Spring Boot 기본 네이밍(소문자 + snake_case)과 일치하도록 소문자로 통일했습니다.
-- (대소문자를 구분하는 Linux MySQL 에서도 안전)
-- spring.jpa.hibernate.ddl-auto=none 이므로 이 파일로 스키마를 직접 생성합니다.

DROP DATABASE IF EXISTS plan_it_korea;
CREATE DATABASE plan_it_korea DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE plan_it_korea;

-- 유저
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_birth_date DATE NOT NULL,
    user_phone VARCHAR(255) NOT NULL UNIQUE,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    join_path VARCHAR(5) NOT NULL COMMENT '가입 경로 (HOME, KAKAO, NAVER)',
    sns_id VARCHAR(255) DEFAULT NULL
);

-- 숙소
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_price VARCHAR(255) NOT NULL,
    product_address VARCHAR(255) NOT NULL,
    product_description TEXT NOT NULL,
    product_category VARCHAR(255) NOT NULL
);

-- 객실
CREATE TABLE sub_products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    main_product_id BIGINT NOT NULL,
    sub_name VARCHAR(255) NOT NULL,
    sub_description TEXT NOT NULL,
    sub_price VARCHAR(255) NOT NULL,
    sub_person INT NOT NULL,
    FOREIGN KEY (main_product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 예약 (reservation_status 기본값 1 : 엔티티 columnDefinition 과 동일)
CREATE TABLE reservations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    sub_product_id BIGINT NOT NULL,
    person BIGINT NOT NULL,
    total_price VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    order_id VARCHAR(255) NOT NULL,
    reservation_status INT NOT NULL DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_product_id) REFERENCES sub_products(id) ON DELETE CASCADE
);

-- 결제
CREATE TABLE payments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    order_id VARCHAR(255) NOT NULL UNIQUE,
    payment_user_id VARCHAR(255) NOT NULL,
    created_time VARCHAR(255) NOT NULL,
    approved_time VARCHAR(255) NOT NULL,
    payment_type VARCHAR(255) NOT NULL
);

-- 위시리스트
CREATE TABLE wish_list (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 지역
CREATE TABLE cities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL
);

-- 숙소-지역
CREATE TABLE product_cities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT,
    city_id BIGINT,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
);

-- 편의시설
CREATE TABLE facilities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    facility_name VARCHAR(255) NOT NULL
);

-- 숙소-편의시설 (엔티티 @ManyToMany @JoinTable, 별도 id 없음)
CREATE TABLE product_facilities (
    product_id BIGINT NOT NULL,
    facility_id BIGINT NOT NULL,
    PRIMARY KEY (product_id, facility_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (facility_id) REFERENCES facilities(id) ON DELETE CASCADE
);

-- 숙소 이미지
CREATE TABLE product_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    product_image VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 객실 이미지
CREATE TABLE sub_product_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sub_product_id BIGINT NOT NULL,
    sub_product_image VARCHAR(255),
    FOREIGN KEY (sub_product_id) REFERENCES sub_products(id) ON DELETE CASCADE
);

-- 공지사항 / 자주묻는질문 (엔티티 @Enumerated(STRING))
CREATE TABLE boards (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    board_type ENUM('공지사항', '자주묻는질문') NOT NULL,
    board_title VARCHAR(255) NOT NULL,
    board_content VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    upload_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 1:1 문의
CREATE TABLE inquiries (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    inquiry_title VARCHAR(255) NOT NULL,
    inquiry_category ENUM('결제', '취소', '환불') NOT NULL,
    inquiry_content VARCHAR(255) NOT NULL,
    inquiry_image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 리뷰
CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    review_commend VARCHAR(255) NOT NULL,
    review_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 기본 코드 데이터 (프론트가 facilityId 를 id 순서로 가정하므로 순서 유지)
INSERT INTO cities (city_name) VALUES
('서울'), ('부산'), ('제주'), ('경주'), ('가평'),
('강릉'), ('여수'), ('전주'), ('해남'), ('대구');

INSERT INTO facilities (facility_name) VALUES
('사우나'), ('수영장'), ('바베큐'), ('세탁'), ('스파&월풀'), ('와이파이'), ('에어컨'),
('샤워실'), ('욕실용품'), ('조식'), ('주차'), ('반려견'), ('취사'), ('OTT');
