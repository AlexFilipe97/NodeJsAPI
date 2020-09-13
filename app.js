const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const validator = require("express-validator");
const env = require("dotenv");
env.config();

//db
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
    .then(() => console.log("DB connection successful!"));

mongoose.connection.on("error", err => {
    console.log(`DB connection failed: ${err.message}`)
});

//routes
const postRoutes = require("./routes/posts");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(validator());
app.use("/", postRoutes);

//port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});