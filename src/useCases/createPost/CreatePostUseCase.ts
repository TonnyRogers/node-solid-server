import { IPostsRepository } from "../../repositories/IPostsRepository";
import { ICreatePostRequestDTO } from "./CreatePostsDTO";
import { Post } from "../../entities/Post";

export class CreatePostUseCase {
  constructor(
    private postsRepository: IPostsRepository,
  ){}

  async execute(data: ICreatePostRequestDTO) {
    const post = new Post(data);

    await this.postsRepository.save(post);
  }
}