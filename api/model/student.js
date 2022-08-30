import mongoose from "mongoose";

// defining schema

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required !"],
      trim: true,
      minLength: 3,
      maxLength: 20,
    },

    age: {
      type: Number,
      required: true,
      min: [16, "age should greater than 16"],
      max: [40, "Age should not be greater than 40"],
    },

    //   tutionFee:{type:mongoose.Decimal128,required:true,validate:(){}}
    tutionFee: {
      type: mongoose.Decimal128,
      // required: true,
      validate: (v) => v >= 30250.5,
    },
    //   hobbies:[String]
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [
      { value: { type: String }, publish: { type: Date, default: Date.now() } },
    ],

    //   timestamps: true,

    joinDate: { type: Date, default: Date.now() },
  },

  { timestamps: true }
);

// creating model
// or compling schema

const studentModel = mongoose.model("student", studentSchema);

// creating the document or inserting

// const createDocument = async () => {
//   try {
//     const studentDoc = new studentModel({
//       name: "John doe",
//       age: 20,
//       tutionFee: 50000.36,
//       hobbies: ["coidng", "reading", "Travelling"],
//       isActive: false,
//       comments: [{ value: "John doe is the most used named in programming" }],
//     });

//     const response = await studentDoc.save();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log(studentSchema.path("age"));

const createDocument = async (nam, ag, tFee, hobb, isAct, cmts) => {
  try {
    const studentDoc = new studentModel({
      name: nam,
      age: ag,
      tutionFee: tFee,
      hobbies: hobb,
      isActive: isAct,
      comments: cmts,
    });

    const response = await studentDoc.save();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default createDocument;

// retrieve documents

export const findDocument = async () => {
  try {
    // const response = await studentModel.find({}); // will find all
    // const response = await studentModel.find({
    //   _id: "630d0d319140091c9b544934",
    // }); // find by id
    // const response = await studentModel.find({ hobbies: { $in: "reading" } }); // it will show all with hobbies of reading
    // const response = await studentModel.find({name:1,age:{$gt:16}}).limit(2);
    // const response = await studentModel.find().limit(2).sort("-name");
    response.forEach(
      (response) =>
        // console.log(response.name, response.age, response.tutionFee,response.hobbies,)
        // console.log(response.tutionFee.toString(), response.hobbies) // all method
        console.log(
          response.tutionFee.toString(),
          response.hobbies[0],
          response.comments[0].value
        )
      // console.log(response)
    );
  } catch (error) {
    console.log(error);
  }
};

// find specfic document by its properties

export const getDocumentByProperties = async () => {
  // select where take only one arguement
  // const getDocs = await studentModel.find().where("name age"); // will query name and age
  // const getDocs = await studentModel.find().select("name age"); // select also work
  // const getDocs = await studentModel.find().where("name age"); // select also work
  // const getDocs = await studentModel.find().select(["name", "age"]); //include show work fine as above
  // const getDocs = await studentModel.find().select(["-name", "-age"]); // exclude don't show this show other
  // const getDocs = await studentModel.find().select("-name -age --tuttionFee"); // exclude don't show this show other
  // const getDocs = await studentModel.find().select({ name: 1, age: 1 }); //1 mean show its projection basically
  // const getDocs = await studentModel.find().select({ name: 0, age: 0 }); //0 dont'show name and age show rest of other pros

  // another way of showing the document is
  const getDocs = await studentModel.find({}, "name age"); // show name and age only
  // const getDocs = await studentModel.find({}, "name"); // name only
  // getDocs.forEach((doc) => console.log(doc));
  console.log(getDocs);
};

// find by id
export const getSingleDocument = async () => {
  const getDocs = await studentModel.findById("630d0a3781173c92ee340395");
  console.log(getDocs);
  // console.log(getDocs._id.getTimestamp(), getDocs.name, getDocs.age);
};

// find by id of specfic properties

export const getSingleDocumentByProperties = async () => {
  // const getDocs = await studentModel
  //   .findById("630d0a3781173c92ee340395")
  //   .select("name");

  // const getDocs = await studentModel.findById(
  //   "630d0a3781173c92ee340395",
  //   "name age"
  // );

  // const getDocs = await studentModel.findById("630d0a3781173c92ee340395", {
  //   name: 1,
  //   age: 1,
  // });
  const getDocs = await studentModel.findById("630d0a3781173c92ee340395", [
    "name",
    "age",
  ]);
  console.log(getDocs);
};

// retrieve document by fields name
// there might be an array of same name or age so in this case finding all the name containing john or something

export const getDocmentByFields = async () => {
  // const getDocs = await studentModel.find({ name: "john" });
  // console.log(getDocs[0].name, getDocs[0].age, getDocs[0].hobbies); // we can limit instead of array indexing
  // const getDocs = await studentModel.find({ name: "john" }).limit(1);
  const getDocs = await studentModel
    .find({ name: "john" })
    .select("name age")
    .where({ age: { $gt: 25 } }); // will show age is greater than 25 only
  console.log(getDocs);
};

// getlimited document
export const getLimitedDocument = async () => {
  // const getDocs = await studentModel.find().limit(2);
  // const getDocs = await studentModel.find({}, null, { limit: 2 }); // this method also work
  // first is all ,2nd parameter is projection and third is  options to limit
  const getDocs = await studentModel.find(
    {},
    { name: 1, age: 1 },
    { limit: 2 }
  ); // lets work with projection
  // it means limit up to 2 doc and show name and age only ,ofcourse id will be printed byDefault
  console.log(getDocs);
};

//
// skip document

export const getLimitedDocumentAndSkipDocument = async () => {
  const getDocs = await studentModel.find().limit(2).skip(1); // limit to 2 doc and skip the first one of current limit and show finally 2 document again 1 fetching one above skipped one
  console.log(getDocs);
};

// cout document

export const countDocuments = async () => {
  const getDocs = await studentModel.find().countDocuments();
  console.log(getDocs);
};

// sort document

export const sortDocuments = async () => {
  // const getDocs = await studentModel.find().sort({ age: 1 }); // sort doc as per name
  const getDocs = await studentModel.find().sort({ age: -1 }); // sort doc in descending order
  // 1 and -1
  console.log(getDocs);
};

// mixin document

export const mixDocument = async () => {
  const getDocs = await studentModel.find(
    {},
    { name: 1, age: 1 },
    { limit: 3, skip: 1 }
  );
  console.log(getDocs);
  // its like above .find().limit().skip() type
};

// comparison query method

export const comparisionQueryDocument = async () => {
  // const getDocs = await studentModel.find({ age: { $gt: 20 } }).limit(3);
  const getDocs = await studentModel.find({ age: { $in: [20, 30] } }).limit(3);
  // lte -less than equal
  // gte -greater than equal
  // ne  -not equal
  // greater than gt ,less than lt,
  // in -age:{$in:[15,20]}
  console.log(getDocs);
};

// logical query

export const logicalQueryDocument = async () => {
  // const getDocs = await studentModel.find({
  //   $and: [{ age: 30 }, { name: "Rohit" }],
  // });
  // const getDocs = await studentModel.find({
  //   $or: [{ age: 30 }, { name: "Rohit" }],
  // });
  const getDocs = await studentModel.find({
    $and: [{ age: { $gt: 21 } }, { tutionFee: { $gt: 35000.25 } }],
  });
  // similary not operator
  // nor -or opposite
  console.log(getDocs);
  // both condition should be true in $and age===30 and name==='john'
};

// get full docs
export const showAllDocuments = async () => {
  const getDocs = await studentModel.find();
  console.log(getDocs);
};

// update documents method

// findByidAndUpdate
// updateOne
// updateMany

export const updateDocumentById = async (id) => {
  const getDocs = await studentModel.findByIdAndUpdate(
    id,
    {
      name: "Johnshon",
    },
    {
      returnDocument: "after",
    }
  );
  console.log(getDocs);
};

// update one

export const updateOneDocument = async (id) => {
  const getDocs = await studentModel.updateOne({ _id: id }, { name: "Nabwin" });
  // update one will update the first one
  console.log(getDocs);
};

// update many

export const updateManyDocuments = async (a) => {
  const getDocs = await studentModel.updateMany({ age: a, name: "Hustlers" });
  console.log(getDocs);
};

// delete documents

// deleteById

export const deleteDocumentById = async (id) => {
  const getDocs = await studentModel.findByIdAndDelete({ _id: id });
  console.log(getDocs);
};

// delete one

export const deleteOneDocument = async (id) => {
  const getDocs = await studentModel.deleteOne({ _id: id });
  console.log(getDocs);
};

// delete all document

export const deleteAllDocument = async (names) => {
  // const getDocs = studentModel.deleteMany({ name: names });
  const getDocs = studentModel.deleteMany({ name: names });
  console.log(getDocs);
};
