import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";

dotenv.config();
//CONST
const app = express();
const port = process.env.PORT || 3002;
// DATA BASE CONNECTION
const db = new pg.Client({
  port: process.env.DB_PORT,
  user: "postgres",
  host: "localhost",
  database: "AltaySouvenirs",
  password: "10032018BakI",
});
db.connect();
db.query("SELECT * FROM users", (req, res) => {
  console.log(res.rows);
});

//MIDDLE LAYERS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// ROUTES
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
