import { commonError } from "../../../utils/commmonError/commonError";
import { UserRepository } from "../repositories/userRepository";
import * as bcrypt from "bcrypt";

class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: any) {
    const userAlreadyExists = await this.repository.findByEmail(data.email);

    if (userAlreadyExists) {
      return commonError("User already exists", 400);
    }

    const user = {
      ...data,
      password: bcrypt.hashSync(data.password, 8),
    };
    return this.repository.create(user);
  }
}

export { UserService };
