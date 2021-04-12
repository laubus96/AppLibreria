import { Router } from "express";

import * as crltAuth from "../middleware/authJwt";

const router = Router();

import * as crltPasword from "../controllers/ForgetPassword.controller";

router.post(
  "/forgotpassword",

  crltPasword.forgetPassword
);

export default router;
