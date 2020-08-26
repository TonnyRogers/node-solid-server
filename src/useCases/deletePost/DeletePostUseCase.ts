import { IPostsRepository } from "../../repositories/IPostsRepository";
import { IDeletePostRequestDTO } from "./DeletePostsDTO";
import { Post } from "../../entities/Post";

export class DeletePostUseCase {
  constructor(
    private postsRepository: IPostsRepository,
  ){}

  async execute(data: IDeletePostRequestDTO) {
    await this.postsRepository.delete(data.id);
  }
}