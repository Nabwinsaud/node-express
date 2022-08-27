import express from "express";

// const app = express(); use express.router()
const router = express.Router();

// router.get("/student/fetch", (req, res) => {
//   res.send("student id get successfully");
//   //   next();
// });
// router.post("/student/create", (req, res) => {
//   res.send("student account created successfully");
// });
// router.delete("/student/delete", (req, res) => {
//   res.send("student account deleted successfully");
// });
// router.put("/student/put", (req, res) => {
//   res.send("student account updated successfully");
// });

// more better

router.get("/fetch", (req, res) => {
  res.send(" student id get successfully");
  //   next();
});
router.post("/create", (req, res) => {
  res.send("account created successfully");
});
router.delete("/delete", (req, res) => {
  res.send("student account deleted successfully");
});
router.put("/put", (req, res) => {
  res.send("student account updated successfully");
});

export default router;
