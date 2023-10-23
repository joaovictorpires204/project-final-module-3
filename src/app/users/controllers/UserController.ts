import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { commonError } from "../../../utils/commmonError/commonError";
import * as yup from "yup";
import { STATUS_CODE } from "../../../utils/statusCode";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    const userValidate = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      userValidate.validate(body);
    } catch (e: any) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(commonError(e.error, STATUS_CODE.BAD_REQUEST));
    }

    const result = await this.service.create(body);
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(STATUS_CODE.CREATED).json(result);
  }
}

export { UserController };
