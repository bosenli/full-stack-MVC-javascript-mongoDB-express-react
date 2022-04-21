const app = require("./app.js");
const db = require("./db");

const PORT = process.env.PORT || 3000;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//then go to package.json add 
//    "dev": "nodemon server.js",
//"start": "node server.js"

//in the terminal:
//run: node seed/items.js
//run: mongo
//run: use thirdItemsDatabase
//run: db.items.find()


