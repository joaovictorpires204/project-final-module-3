import { UserModule } from "../users/userModule";
import { AuthController } from "./controllers/authMiddleware";
import { AuthService } from "./services/authService";

class AuthModule {
  static getInstances() {
    const { repository } = UserModule.getInstances();
    const service = new AuthService(repository);
    const controller = new AuthController(service);

    return { service, controller };
  }
}

export { AuthModule };
