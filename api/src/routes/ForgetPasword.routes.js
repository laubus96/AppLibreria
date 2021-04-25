import { Router } from "express";
import * as crltPasword from "../controllers/ForgetPassword.controller";
import * as crltAuth from "../middleware/authJwt";

const router = Router();

router.put("/changePassword", crltPasword.changePassword);
router.get("/resetVerify", crltPasword.verifyTokenForgetPassword);
router.post(
  "/forgot",

  crltPasword.forgetPassword
);

export default router;
