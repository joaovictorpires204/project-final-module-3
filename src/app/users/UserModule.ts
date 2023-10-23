import { User } from "./entities/userEntity";
import { UserRepository } from "./repositories/userRepository";
import { UserService } from "./services/userService";
import { UserController } from "./controllers/userController";

class UserModule {
  static getInstances() {
    const repository = new UserRepository(User);
    const service = new UserService(repository);
    const controller = new UserController(service);

    return { repository, service, controller };
  }
}

export { UserModule };
