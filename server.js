const express = require("express");
const cors = require("cors");
const PORT = 4000;
const ConnectDb = require("./db/connection");
require("dotenv").config();
const courseRoutes = require("./routes/courseRoutes");

const app = express();
app.use(express.json());

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", courseRoutes);

app.get("/", (req, res) => {
  res.send("welcome in  App");
});
const startConnection = async () => {
  try {
    // console.log(process.env.MONGO_URL);
    await ConnectDb(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server is runing on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startConnection();
