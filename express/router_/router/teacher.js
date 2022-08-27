import express from "express";

// const app = express();

const router = express.Router();

// app to router
// router.get("/teacher/fetch", (req, res) => {
//   res.send("teacher id get successfully");
// });
// router.post("/teacher/create", (req, res) => {
//   res.send("teacher account created successfully");
// });
// router.delete("/teacher/delete", (req, res) => {
//   res.send("teacher account deleted successfully");
// });
// router.put("/teacher/put", (req, res) => {
//   res.send("student account updated successfully");
// });

// more concise
router.get("/fetch", (req, res) => {
  res.send("teacher id get successfully");
});
router.post("/create", (req, res) => {
  res.send(" teacher account created successfully");
});
router.delete("/delete", (req, res) => {
  res.send("teacher account deleted successfully");
});
router.put("/put", (req, res) => {
  res.send("teacher account updated successfully");
});

// last thing is to export

// module.exports=router; // old method

export default router;
