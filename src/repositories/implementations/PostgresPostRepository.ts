import { IPostsRepository } from "../IPostsRepository";
import { Post } from "../../entities/Post";

interface PostProps {
  id: number,
}

export class PostgresPostRepository implements IPostsRepository {
  private posts: Post[] = [];

  async save(post: Post): Promise<void> {
    this.posts.push(post);
    console.log(this.posts);
  }

  async delete(id: string): Promise<void> {
    const filtered = this.posts.findIndex( item => item.id === id );
    console.log(id);
    console.log(this.posts);
    console.log(filtered);

    this.posts.splice(filtered,1);
    console.log(this.posts);
  }
}