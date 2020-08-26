import { PostgresPostRepository } from "../../repositories/implementations/PostgresPostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";

const postgresPostRepository = new PostgresPostRepository();

const createPostUseCase = new CreatePostUseCase(
  postgresPostRepository
);

const createPostController = new CreatePostController(
  createPostUseCase
);

export { createPostUseCase, createPostController };