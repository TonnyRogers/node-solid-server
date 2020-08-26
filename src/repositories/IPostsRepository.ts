import { Post } from "../entities/Post";

export interface IPostsRepository {
  save(post: Post): Promise<void>;
  delete(id: string): Promise<void>;
}