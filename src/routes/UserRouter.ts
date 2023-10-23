import { Router } from "express";
import { UserModule } from "../app/users/userModule";

const userRouter = Router();
const { controller } = UserModule.getInstances();

userRouter.post("/", controller.create.bind(controller));

export { userRouter };
