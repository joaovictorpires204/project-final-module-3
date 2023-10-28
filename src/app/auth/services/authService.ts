const JWT = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
import { UserRepository } from "../../users/repositories/userRepository";
import { IUser } from "../../users/entities/userEntity";
import { commonError } from "../../../utils/commmonError/commonError";
import { authUserDto } from "../dtos/authUserDto";
import { AuthMapper, IToApi } from "../../../utils/mappers/authMapper";
import { STATUS_CODE } from "../../../utils/statusCode";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async auth(data: authUserDto) {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      return commonError(
        "Email or password is not valid",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const validatePassword = bcrypt.compareSync(
      data.password,
      (user as IUser).password as string
    );

    if (!validatePassword) {
      return commonError(
        "Email or password is not valid",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const payload = { ...AuthMapper.toApi(user as any as IToApi) };
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const options = { expiresIn: "5min" };

    const token = JWT.sign(payload, secretKey, options);

    return { token, user: AuthMapper.toApi(user as any as IToApi) };
  }
}

export { AuthService };
