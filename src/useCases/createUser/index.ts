import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreatUserController } from './CreateUserController';

const postgresUserRepository = new PostgresUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider,
);

const createUserController = new CreatUserController(
  createUserUseCase,
);

export { createUserUseCase, createUserController };