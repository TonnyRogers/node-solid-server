import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find( filteredUser => filteredUser.email === email );

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
    console.log(this.users);
  }
}