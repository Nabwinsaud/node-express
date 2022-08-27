const teacherController = async (req, res) => {
  if (res.status(200)) {
    await res.send("teacher data added successfully");
  } else {
    await res.json({ status: "Error", message: "Not successfully message" });
  }
};

export default teacherController;
