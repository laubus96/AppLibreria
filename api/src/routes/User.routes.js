import { Router } from "express";
import * as crltAuth from "../middleware/authJwt";
import * as crltUser from "../controllers/User.controller";

const router = Router();

router.put(
  "/user/update",
  [crltAuth.verifyToken, crltAuth.isAdmin],
  crltUser.updateUser
);

router.delete(
  "/user/delete/:id",
  [crltAuth.verifyToken, crltAuth.isAdmin],
  crltUser.deleteUser
);

router.get("/user", crltAuth.verifyToken, crltUser.getUser);
export default router;
