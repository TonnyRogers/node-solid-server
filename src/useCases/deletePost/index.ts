import { PostgresPostRepository } from "../../repositories/implementations/PostgresPostRepository";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { DeletePostController } from "./DeletePostController";

const postgresPostRepository = new PostgresPostRepository();

const deletePostUseCase = new DeletePostUseCase(
  postgresPostRepository
);

const deletePostController = new DeletePostController(
  deletePostUseCase
);

export { deletePostController, deletePostUseCase }