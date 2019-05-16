const experss = require("express");
const connetDB = require("./config/db");

const app = experss();

//connect db
connetDB();

app.get("/", (req, res) => {
  res.send("API Running...");
});

//Define Routes
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started on Port" + PORT);
});
