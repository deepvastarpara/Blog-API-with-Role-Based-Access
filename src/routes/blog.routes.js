import { Router } from "express";
import * as blogController from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/", authenticate, blogController.list);
router.post("/", authenticate, authorize("ADMIN"), blogController.create);
router.put("/:id", authenticate, authorize("EDITOR"), blogController.update);

export default router;
