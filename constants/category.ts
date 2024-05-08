import { ExtendedPostListObject, PostListObject } from '@/_lib/types/notion-response';

export type Category = '개발' | '신변잡기';
export type Posts = Record<Category, PostListObject & ExtendedPostListObject>;
export const categories: Category[] = ['개발', '신변잡기'];
export const init = { 개발: [], 신변잡기: [] };
