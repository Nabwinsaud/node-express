const db = {};

db.movies.insertOne({
  title: "The National code",
  generes: ["Drama", "History"],
  runTime: 120,
  year: "2019",
  rating: "7.4",
  director: ["Sergio camio"],
  cast: ["Berlin", "Helsinki", "Authur", "danveer", "Tokyo"],
  type: "series",
});

// to retreive the single document

db.movies.find({ title: "The National code" });

// insertMany

db.movies.insertMany([
  {
    title: "Money heist",
    generes: ["crime", "thriller"],
    rating: "9",
    year: ["2015", "2021"],
    total_season: 5,
    episode: 20,
    cast: ["professor", "tokoyo"],
  },

  {
    title: "Money heist",
    generes: ["crime", "thriller"],
    rating: "9",
    year: ["2015", "2021"],
    total_season: 5,
    episode: 20,
    cast: ["professor", "tokoyo"],
  },
  {
    title: "Money heist",
    generes: ["crime", "thriller"],
    rating: "9",
    year: ["2015", "2021"],
    total_season: 5,
    episode: 20,
    cast: ["professor", "tokoyo"],
  },
  {
    title: "Money heist",
    generes: ["crime", "thriller"],
    rating: "9",
    year: ["2015", "2021"],
    total_season: 5,
    episode: 20,
    cast: ["professor", "tokoyo"],
  },
]);

//query method

// db.movies.find({rating:'9'})
db.movies.find({ rated: { $in: ["PG", "PG-13"] } });

// item a or b or c
// item in ['a','b','c']

db.movies.find({ countries: "Nepal", rating: { $gte: 7 } });

db.movies.find({
  year: 2019,
  $or: [{ award: { $gte: 5 } }, { genre: "drama" }],
});

// db.inventory.find({ status: "A", $or: [{ qty: { $lt: 5 }, item: /^p/ }] });

// db.users.insertMany([
//   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
//    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
//    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
//    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
//    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
// ]);
