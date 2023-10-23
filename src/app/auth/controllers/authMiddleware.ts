import { Request, Response } from "express";
import * as yup from "yup";
import { commonError } from "../../../utils/commmonError/commonError";
import { STATUS_CODE } from "../../../utils/statusCode";


class AuthController {
  constructor(private service: any) {}

  async auth(req: Request, res: Response) {
    const { body } = req;

    const authValidation = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      await authValidation.validate(body);
    } catch (e: any) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(commonError(e.errors, STATUS_CODE.BAD_REQUEST));
    }

    const result = await this.service.auth(body);
    if("error" in result)  {
      return res.status(result.status).json(result);
    }

    return res.status(STATUS_CODE.OK).json(result);
  }
}

export { AuthController };
