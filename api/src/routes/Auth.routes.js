import { Router } from "express";
import * as crltAuth from "../controllers/auth.controller";

const router = Router();

router.post("/singup", crltAuth.singUp);
router.post("/singin", crltAuth.singIn);

export default router;
