const express = require("express");
const app = express();
const manifest = require("./dist/.vite/manifest.json");

app.set("view engine", "pug");

app.use(express.static("dist")); // 设置dist为静态文件目录，

app.get("/", (req, res) => {
  res.render("index", {
    title: "hey",
    message: "hello there",
    index: manifest["index.html"].file,
    css: manifest["index.html"].css[0],
  });
});

app.listen(4000);
