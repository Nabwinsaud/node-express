import express from "express";
import teacherController from "../controllers/teacherController.js";
import { routerMiddleware } from "../middlewares/logger-middleware.js";
// initlilized router
const router = express.Router();

// router level middleware
router.use(routerMiddleware);

// console.log(router);

// router.get("/create", (req, res) => {});
router.get("/create", teacherController);

export default router;
