import { defineConfig } from 'astro/config';

// GitHub Pages 프로젝트 페이지 배포 설정.
// 레포 이름을 'blog'로 만들면 주소는 https://<사용자명>.github.io/blog 가 된다.
// ★ site의 <사용자명> 부분을 본인 GitHub 사용자명으로 바꿀 것.
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/blog',
  build: { format: 'directory' },
});
