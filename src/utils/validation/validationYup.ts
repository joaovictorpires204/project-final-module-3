import * as yup from "yup";
import { commonError } from "../commmonError/commonError";
import { User } from "../../app/users/entities/userEntity";

class UserValidation {
  static async userValidation(data: any) {
    const userValidate = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      return userValidate.validate(data);
    } catch (error: any) {
      return commonError(error.error, 500);
    }
  }
}

export { UserValidation };
