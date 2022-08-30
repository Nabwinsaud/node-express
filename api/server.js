import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import student from "./routes/student.js";
import createDocument, {
  comparisionQueryDocument,
  countDocuments,
  deleteAllDocument,
  deleteDocumentById,
  deleteOneDocument,
  findDocument,
  getDocmentByFields,
  getDocumentByProperties,
  getLimitedDocument,
  getLimitedDocumentAndSkipDocument,
  getSingleDocument,
  getSingleDocumentByProperties,
  logicalQueryDocument,
  mixDocument,
  showAllDocuments,
  sortDocuments,
  updateDocumentById,
  updateManyDocuments,
  updateOneDocument,
} from "./model/student.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// database url
const DATABASE_URL = process.env.DATABASE_URL;
// connection function
connectDB(DATABASE_URL);

// createDocument("john", 23, 80000.45, ["Outing", "reading"], false, [
//   { value: "He is a hacker" },
// ]);

// find document

// findDocument();

// find by propeties
// getDocumentByProperties();

// get single doc
// getSingleDocument();

// get single document by id of certai prop
// getSingleDocumentByProperties();

// get doc by fields
// getDocmentByFields();

// get limited document
// getLimitedDocument();

//get limited and skip document
// getLimitedDocumentAndSkipDocument();

// count documents
// countDocuments();

// sort document
// sortDocuments();

// mixing document
// mixDocument();

// comparision query
// comparisionQueryDocument();

// logical query
// logicalQueryDocument();

// showAllDocuments();

// update documnet by id
// updateDocumentById("630dea0bb16a5f74bcd34d00");

// updateOne
// updateOneDocument("630dea0bb16a5f74bcd34d00");

// updateManyDocuments
// updateManyDocuments(20);

// delete document by id
// deleteDocumentById("630d0a2e9a790035ea872165");

// delete one document
// deleteOneDocument("630dea0bb16a5f74bcd34d00");

// deleteAll document
// deleteAllDocument("Hustlers");
app.use("/get", student);

// listen

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
