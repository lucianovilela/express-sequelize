// init project
var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
require('dotenv').config();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.static("public"));

// Using session middleware
app.use(
  session({
    secret: "a secret string",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
);
const model = require("./model");

app.use(bodyParser.json());

// Access the session with req.session
app.get("/", function (req, res, next) {
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  res.setHeader("Content-Type", "text/html");
  res.render("index", { req });
});

app.use("/admin", require("./middleware/validadeToken"));
app.use("/admin", require("./routes/user"));
app.use("/", require("./routes/login"));

// Listen on port 8080
var listener = app.listen(process.env.PORT || 8080, function () {
  console.log("Listening on port " + listener.address().port);
});
