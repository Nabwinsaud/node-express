import express from "express";
const router = express.Router();
import studentController from "../controllers/studentController.js";

router.get("/fetch", (req, res) => {
  res.send("student account received");
});

// look how this is messy
router.post("/insert/:id", (req, res) => {
  //   res.send("student account created");
  const id = req.params.id;
  console.log(id);
  if (id === parseInt(123).toString()) {
    res.send("ID is equal to 123");
  } else if (id == parseInt(10).toString()) {
    res.send("id is 10");
  } else {
    res.send("Not a valid matched id");
  }
});

// look we need to change our router like these

// router.get("/fetch/:id", studentController);
router.get("/:id", studentController);

// app.get("/coding/:id", (req, res) => {
//   // if the logic is large then its is not recommeneded
//   const id = req.params.id;
//   console.log(id);
//   if (id === parseInt(123).toString()) {
//     res.send("ID is equal to 123");
//   } else if (id == parseInt(10).toString()) {
//     res.send("id is 10");
//   } else {
//     res.send("Not a valid matched id");
//   }
// });

// export is required

export default router;
