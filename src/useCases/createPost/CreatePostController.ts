import { CreatePostUseCase } from "./CreatePostUseCase";
import { Request, Response } from "express";

export class CreatePostController {
  constructor(
    private createPostUseCase: CreatePostUseCase,
  ){}

  async handle(request: Request, response: Response) {
    const { userId, title, body } = request.body;

    try {
      await this.createPostUseCase.execute({
        userId,
        title,
        body
      });
      

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}