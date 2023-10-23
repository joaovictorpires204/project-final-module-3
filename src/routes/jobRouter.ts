import { Router } from "express";
import { JobModule } from "../app/jobs/jobModuler";

const jobRouter = Router();
const { controller } = JobModule.getInstances();

jobRouter.post("/", controller.create.bind(controller));
jobRouter.get("/", controller.findByQuery.bind(controller));


export { jobRouter };
