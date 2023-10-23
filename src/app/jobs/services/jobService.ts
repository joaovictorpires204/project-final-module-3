import { commonError } from "../../../utils/commmonError/commonError";
import { STATUS_CODE } from "../../../utils/statusCode";
import { JobRepository } from "../repositories/jobRepository";
import { CreateJobDto } from "../dtos/createJobDto";

class JobService {
  constructor(private repository: JobRepository) {}

  async create(data: CreateJobDto) {
    try {
      const jobAlreadyExists = await this.repository.findByPosition(data.position)
      if(jobAlreadyExists){ 
        return commonError("This Job position already exists in our Db please create a different one", STATUS_CODE.BAD_REQUEST)
      }
      const result = await this.repository.create(jobAlreadyExists)
      return result
    } catch (e: any) {
      return commonError(e.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll() {
    try {
      return this.repository.findAll();
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }

  async findByQuery(data: any) {
    try {
      return this.repository.findByQuery(data);
    } catch (e: any) {
      return commonError(e.error, STATUS_CODE.BAD_REQUEST);
    }
  }
}

export { JobService };
