import express from "express";
import studentController from "../controllers/studentController.js";
import "../model/student.js";
const stdController = new studentController();
const router = express.Router();

// method call

// router.get("", (req, res) => {
//   res.send("Nodejs !");
// });

router.get("", stdController.getStudents);

export default router;
