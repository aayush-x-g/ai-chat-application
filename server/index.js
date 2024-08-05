import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.get("/test", (req, res) => {
  res.send("It's  working");
});

app.listen(port, () => {
  console.log("server running");
});
