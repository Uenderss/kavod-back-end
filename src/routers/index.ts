import { Router } from "express";
import { usersRouter } from "./users-router";
import authRouter from "./authentication-router";

const router= Router();
router.use(usersRouter);
router.use(authRouter);

export default router;

