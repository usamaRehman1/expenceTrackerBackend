import { Router } from "express";
import getController from "./controller/get.js";
import postController from "./controller/post.js";
import updateController from "./controller/update.js";
import deleteController from "./controller/delete.js";

const router = Router();

router.get("/", getController)
router.post("/", postController)
router.put("/:id", updateController)
router.delete("/:id", deleteController)

export default router