import { Author } from "./author";

export interface Post {
  id: number;
  author: Author;
  content: PostContent[];
  comments: string[];
  publishedAt: Date;
}

export interface PostContent {
  type: string;
  content: string;
}