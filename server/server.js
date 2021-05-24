const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
const connection =
  "mongodb+srv://user:user@cluster0.xibdy.mongodb.net/insta_shop?retryWrites=true&w=majority&ssl=true";

const cluster =
  "mongodb://user:user@cluster0-shard-00-00.xibdy.mongodb.net:27017,cluster0-shard-00-01.xibdy.mongodb.net:27017,cluster0-shard-00-02.xibdy.mongodb.net:27017/nastha_global_utama?ssl=true&replicaSet=atlas-oco9wy-shard-0&authSource=admin&retryWrites=true&w=majority";

require("dotenv").config();

const app = express()

const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.listen(port, () => {
   console.log(`Server running on port: ${port}`)
})

mongoose
  .connect(cluster, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));