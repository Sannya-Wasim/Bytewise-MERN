const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
// console.log(process.env);

const app = express();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// All Users
app.get("/user", (req, res) => {
  const userSelect = "SELECT * FROM user";
  db.query(userSelect, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

// Signup
app.post("/signup", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;

  const insertUser =
    "INSERT INTO user(name, password, email, address, phone) VALUES(?, ?, ?, ?, ?);";
  db.query(
    insertUser,
    [name, password, email, address, phone],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

// Login
app.get("/login", (res, req) => {
  const email = req.body.email;
  const password = req.body.password;
  const selectUser = "SELECT * FROM user WHERE email = ? AND password = ?;";

  db.query(selectUser, [email, password], (err, result) => {
    res.send(result);
  });
});

// All Pets
app.get("/pets", (req, res) => {
  const petsSelect = "SELECT * FROM pets";
  db.query(petsSelect, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

// Single Pet
app.get("/pets/:id", (req, res) => {
  const id = req.params["id"];
  const petsSelect = `SELECT * FROM pets where id = ${id}`;
  db.query(petsSelect, (err, result) => {
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404);
    }
    console.log(err);
  });
});

// Products
app.get("/products", (req, res) => {
  const productsSelect = "SELECT * FROM products";
  db.query(productsSelect, (err, result) => {
    console.log(err);
    res.send(result);
  });
});
// Single Product
app.get("/products/:id", (req, res) => {
  const id = req.params["id"];
  const productsSelect = `SELECT * FROM products where id = ${id}`;
  db.query(productsSelect, (err, result) => {
    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404);
    }
    console.log(err);
  });
});

// Stolen Report
app.post("/stolen", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const petName = req.body.petName;
  const location = req.body.location;
  const date = req.body.date;
  const description = req.body.description;

  const insertUser =
    "INSERT INTO stolen_pets(owner_name, pet_name, phone, location, date, description) VALUES(?, ?, ?, ?, ?, ?);";
  db.query(
    insertUser,
    [name, petName, phone, location, date, description],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

// Place Order
app.post("/order", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const qty = req.body.qty;

  const insertOrder =
    "Insert into order_item(product_id, product_name, price, quantity) Values (?, ?, ?, ?);";
  db.query(insertOrder, [id, name, price, qty], (err, result) => {
    console.log(result);
    console.log(err);
  });
});
// All Orders
app.get("/order", (req, res) => {
  const orderSelect = "SELECT * FROM order_item";
  db.query(orderSelect, (err, result) => {
    console.log(err);
    res.send(result);
  });
});
// Delete Order
app.delete("/order/:order_id", (req, res) => {
  const order_id = req.params.order_id;
  const orderDelete = "DELETE FROM order_item WHERE order_id = ?";

  db.query(orderDelete, order_id, (err, result) => {
    if (err) console.log(err);
  });
});

// Comment
app.post("/comment", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const comment = req.body.comment;

  const insertComment =
    "Insert into comment(name, email, comment) Values(?, ?, ?);";
  db.query(insertComment, [name, email, comment], (err, result) => {
    console.log(result);
    console.log(err);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up and running");
});
