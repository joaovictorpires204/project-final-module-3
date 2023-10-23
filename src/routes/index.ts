import { Router } from "express";
import { userRouter } from "./userRouter";
import { jobRouter } from "./jobRouter";
import { authRouter } from "./authRouter";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/jobs", jobRouter)
routes.use("/auth", authRouter)


export { routes };
