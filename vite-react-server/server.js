import express from "express";
import { createServer as createViteServer } from "vite";

const app = express();

// 相当于启动了一个vite的devServer
createViteServer({
  server: {
    middlewareMode: "ssr", // 在ssr模式下
  },
}).then((vite) => {
  app.use(vite.middlewares);
  app.listen(4000);
});
