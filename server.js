const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

app.use(express.json()); //for middleware

app.get("/", (req, res) => {
  res.send(`Hello Node API`);
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).jdon({ message: error.message });
  }
});

/* app.get("/user", (req, res) => {
  res.send(`Hello Node API users`);
}); */

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://godwinmail6:-FcxiJcNTtCGS2.@nodeapi.fyfadpt.mongodb.net/Node-API?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log(`Node API is running on port 3000`);
    });
  })
  .catch(error => {
    console.log(error);
  });
