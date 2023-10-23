import { commonError } from "../../../utils/commmonError/commonError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { CreateJobDto } from "../dtos/createJobDto";
import { IJob } from "../entities/jobEntity";

class JobRepository {
  constructor(private model: any) {}

  async create(data: CreateJobDto) {
    try {
      return this.model.create(data);
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }

  async findByPosition(position: string) {
    try {
      return this.model.findOne({position});
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.model.find();
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }

  async findByQuery(data: any) {
    try {
      return this.model.find(data);
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }
}

export { JobRepository };
