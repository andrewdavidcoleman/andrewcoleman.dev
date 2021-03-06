const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

app.listen(PORT, function() {

  console.log("App listening on PORT: " + PORT);

});
