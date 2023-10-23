import { Model } from "mongoose";
import { commonError } from "../../../utils/commmonError/commonError";
import { IUser } from "../entities/userEntity";
import { STATUS_CODE } from "../../../utils/statusCode";

class UserRepository {
  constructor(private model: Model<IUser>) {}

  async create(data: IUser) {
    try {
      return this.model.create(data);
    } catch (error: any) {
      return commonError(error.error, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async findByEmail(email: any) {
    try {
      return this.model.findOne({ email });
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { UserRepository };
