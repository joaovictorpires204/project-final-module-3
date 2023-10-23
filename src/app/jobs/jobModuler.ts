import { JobController } from "./controllers/jobController";
import { Job } from "./entities/jobEntity";
import { JobRepository } from "./repositories/jobRepository";
import { JobService } from "./services/jobService";

class JobModule {
  static getInstances() {
    const repository = new JobRepository(Job);
    const service = new JobService(repository);
    const controller = new JobController(service);

    return { controller, repository, service };
  }
}

export { JobModule };
