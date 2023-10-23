import { Router } from "express";
import { AuthModule } from "../app/auth/authModule";

const authRouter = Router();
const { controller } = AuthModule.getInstances();

authRouter.post("/", controller.auth.bind(controller));

export { authRouter };
