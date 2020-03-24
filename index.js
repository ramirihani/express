express = require("express");
const app = express();

let hour = new Date().getHours();

app.get("/", function(req, res) {
  if (hour < 8 || hour > 17) res.sendFile(__dirname + "/public/turnoff.html");
  else res.sendFile(__dirname + "/public/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/ourservices", (req, res) => {
  res.sendFile(__dirname + "/public/ourservices.html");
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("serveur is running on port 3000");
});
