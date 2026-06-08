import { defineCollection, z } from 'astro:content';

// draft: true 면 빌드 제외 (비공개 1차 방어선)
// report: 짝이 되는 HTML 발행본 경로 (public/reports/ 기준)
// deck: PPTX 변환 슬라이드 폴더 (public/assets/ 기준)
// sig: 이 글의 시그니처 색 (red | blue | brown) — 한 글 = 한 색
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    report: z.string().optional(),
    deck: z.string().optional(),
    download: z.string().optional(),
    sig: z.enum(['red', 'blue', 'brown']).default('red'),
    kind: z.enum(['Report', 'Essay', 'Deck']).default('Essay'),
  }),
});

export const collections = { posts };
