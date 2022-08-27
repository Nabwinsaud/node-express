// how nodejs work

(function (exports, require, module, __filename, __dirname) {
  console.log("Welcome Everyone");
});

// __filename

// include full dir + filename(index.js)
console.log(__filename);

console.log(__dirname);
// dir name only dir

const path = require("path");
const os = require("os");
console.log(path);

// console.log(path.basename("D:\\nodejs_re_master_version3.O\\nodejs\\index.js"));
// console.log(path.basename(__filename)); // index.js
// console.log(path.basename(__filename, ".js")); // index
// console.log(path.basename(__dirname)); // nodejs

console.log(path.join("code/", "eat", "sleep"));
console.log(path.join("code/", "eat", "sleep", ".."));
console.log(path.join("code/", "eat", "sleep", "..", ".."));

// join  using __dirname

console.log(path.join(__dirname, "hustle", "code"));

console.log(
  path.normalize("D:\\nodejs_re_master_version3.O\\nodejs\\\\hustle\\\\code")
);

console.log(
  path.normalize(
    "D:\\nodejs_re_master_version3.O\\nodejs\\\\hustle\\\\code\\..\\"
  )
);

// parse
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// console.log(os);
// console.log(os.platform());
// console.log(os.hostname());
