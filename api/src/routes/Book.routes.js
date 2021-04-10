import { Router } from "express";

import * as crltAuth from "../middleware/authJwt";

const router = Router();
import * as bookCrl from "../controllers/Book.controller";

router.get("/bookGenero/:genero", bookCrl.getBooks);

router.post(
  "/bookCreate",
  [crltAuth.verifyToken, crltAuth.isAdmin],
  bookCrl.createBook
);

router.put(
  "/bookUpdate/:id",
  [crltAuth.verifyToken, crltAuth.isAdmin],
  bookCrl.updateBook
);

router.delete(
  "/bookDelete/:id",
  [crltAuth.verifyToken, crltAuth.isAdmin],
  bookCrl.deleteBook
);

router.get("/bookId/:id", bookCrl.getBookId);

export default router;
