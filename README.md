# SNS Feed Page 프로젝트

## 프로젝트 개요

React와 TailwindCSS를 활용한 게시물 SNS 예제 프로젝트입니다.  
Infinite Scroll, 필터링, 정렬, 좋아요/댓글 기능 등 SNS 스타일 UI를 구현했습니다.

## 실행 방법

1. git clone https://github.com/gksgustjq77/social-media.git

2. npm install

3. npm run dev

## Live site

- https://social-media-eosin-eight.vercel.app/

## 사용한 기술 스택 및 선택 이유

- React: 컴포넌트 기반 UI 구현, 상태 관리 용이
- TypeScript: 코드 안정성과 가독성 향상
- TailwindCSS: 유틸리티 클래스 기반 빠른 스타일링, 반응형 처리 용이
- react-infinite-scroll-component: 스크롤 기반 무한 로딩 구현 간편
- react-lazy-load-image-component: 이미지 lazy loading으로 성능 최적화
- jotai : 페이지 이동 관리를 위한 가벼운 전역관리을 위해 사용

## 디렉토리 구조

- ../src/apis/
  - API 호출 함수
- ../src/atoms
  - 전역 atom 선언
- ../src/components/create
  - 게시물 등록 컴포넌트
- ../src/components/post
  - 피드 목록 컴포넌트
- ../src/components/footer
  - 하단 footer 컴포넌트
- ../src/components/header
  - 상단 헤더(필터) 컴포넌트
- ../src/mock
  - 목업 데이터
- ../src/pages
  - 메인 페이지 목록
- ../src/types
  - 타입 정의 목록

## 구현 기능 목록

- 게시물 무한 스크롤 (Infinite Scroll)
- 카테고리 필터링 (전체/개별)
- 최신순 / 오래된순 정렬
- 게시물 좋아요 토글
- 댓글 토글 표시
- 이미지 Lazy Loading
- 반응형 UI (모바일/데스크탑)
- 상단 필터 및 정렬 헤더 sticky 처리
- 댓글 UI 표시
- 해쉬태그 하이라이트
- 게시물 등록
