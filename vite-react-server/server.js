import express from "express";
import { createServer as createViteServer } from "vite";
import { render } from "./dist/server/server-entry.js";

import fs from "fs";
const app = express();

// 正式环境的服务端渲染
app.use(express.static("dist/client"));
const template = fs.readFileSync("dist/client/index.html", "utf-8");
app.get("*", async (req, res) => {
  // const { render } = require("./dist/server/server-entry.js");
  const context = {};
  const html = await render(req.url, context);
  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  const responseHTML = template.replace("<!-- APP HTML -->", html);
  res.set("content-type", "text/html");
  res.send(responseHTML);
});
app.listen(4000);

// 开发阶段的服务端渲染集成
// middlewareMode: 'html'时相当于启动了一个vite的devServer,
// createViteServer({
//   server: {
//     middlewareMode: "ssr",
//   },
// }).then((vite) => {
//   app.use(vite.middlewares);
//   app.get("*", async (req, res) => {
//     // res.set("content-type", "text/html");
//     // res.send(fs.readFileSync("index.html"));
//     const template = fs.readFileSync("index.html", "utf-8");
//     const { render } = await vite.ssrLoadModule("/src/server-entry.jsx");
//     const html = await render(req.url);
//     const responseHTML = template.replace("<!-- APP HTML -->", html);
//     res.set("content-type", "text/html");
//     res.send(responseHTML);
//   });
//   app.listen(4000);
// });
