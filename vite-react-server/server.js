import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
const app = express();

// middlewareMode: 'html'时相当于启动了一个vite的devServer,
createViteServer({
  server: {
    middlewareMode: "ssr",
  },
}).then((vite) => {
  app.use(vite.middlewares);
  app.get("*", async (req, res) => {
    // res.set("content-type", "text/html");
    // res.send(fs.readFileSync("index.html"));
    const template = fs.readFileSync("index.html", "utf-8");
    const { render } = await vite.ssrLoadModule("/src/server-entry.jsx");
    const html = await render(req.url);
    const responseHTML = template.replace("<!-- APP HTML -->", html);
    res.set("content-type", "text/html");
    res.send(responseHTML);
  });
  app.listen(4000);
});
