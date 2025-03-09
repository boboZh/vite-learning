// const fs = require("fs");
import fs from "fs";
const template = fs.readFileSync("dist/client/index.html", "utf-8");
// const { render } = require("./dist/server/server-entry.js");
import { render } from "./dist/server/server-entry.js";

const routesToRender = fs.readdirSync("src/pages").map((item) => {
  return item.replace(".jsx", "").toLowerCase();
});

for (const router of routesToRender) {
  const context = {};
  const html = render(router, context);

  const responseHTML = template.replace("<!-- APP HTML -->", html);

  const filePath = `dist/static/${router}.html`;
  fs.writeFileSync(filePath, responseHTML);
  console.log(`prerender ${filePath}`);
}
