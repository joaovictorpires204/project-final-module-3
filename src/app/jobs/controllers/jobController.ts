import { Request, Response } from "express";
import { JobService } from "../services/jobService";
import { commonError } from "../../../utils/commmonError/commonError";
import * as yup from "yup";
import { STATUS_CODE } from "../../../utils/statusCode";

class JobController {
  constructor(private service: JobService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    const bodyValidation = yup.object().shape({
      position: yup.string().required(),
      salary: yup.number().required(),
      city: yup.string().required(),
      technologies: yup.string().required(),
      company: yup.string().required(),
      jobType: yup.string().required(),
      jobRegime: yup.string().required(),
      companySizeEmployees: yup.number().required(),
      levelExperience: yup.string().required(),
      jobDescription: yup.string().required(),
      jobWebsite: yup.string().required(),
      url: yup.string().required(),
    });

    try {
      bodyValidation.validate(body);
    } catch (e: any) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(commonError(e.error, STATUS_CODE.BAD_REQUEST));
    }

    const result = await this.service.create(body);
    if ("error" in body) {
      return res.status(result.status).json(result);
    }
    return res.status(STATUS_CODE.CREATED).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await this.service.findAll();

    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(STATUS_CODE.OK).json(result);
  }

  async findByQuery(req: Request, res: Response) {
    const { query } = req;

    if (!query) {
      return this.service.findAll();
    }

    const result = await this.service.findByQuery(query);

    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(STATUS_CODE.OK).json(result);
  }
}

export { JobController };
