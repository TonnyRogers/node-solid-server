import { DeletePostUseCase  } from "./DeletePostUseCase";
import { Request, Response } from "express";

export class DeletePostController {
  constructor(
    private deletePostUseCase: DeletePostUseCase,
  ){}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deletePostUseCase.execute({
        id,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}