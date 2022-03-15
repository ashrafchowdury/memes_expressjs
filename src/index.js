const express = require("express");
const path = require("path");
const requests = require("requests");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  requests(`https://meme-api.herokuapp.com/gimme`).on("data", (chunk) => {
    const objData = JSON.parse(chunk);
    const data = objData.preview[2];
    res.render("index", {
      image: `${data}`,
    });
  });
});

app.listen(3000);
