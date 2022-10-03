import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../model/User";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
