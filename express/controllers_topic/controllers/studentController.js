// controller is just (req,res)=>{}

// whatever the logic goe here
const studentController = (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id === parseInt(123).toString()) {
    res.send("ID is equal to 123");
  } else if (id == parseInt(10).toString()) {
    res.send("id is 10");
  } else {
    res.send("Not a valid matched id");
  }
  //  res.send("Student  account created");
};

export default studentController;
