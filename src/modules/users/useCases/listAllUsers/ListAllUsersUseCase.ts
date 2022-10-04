import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../model/User";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    if (!user.admin) {
      throw new Error("You need to be an admin to list all users!");
    }

    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
