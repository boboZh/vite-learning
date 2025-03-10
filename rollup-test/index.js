import path from "path";
import pkg from "./package.json";
import { a } from "a";
import react from "react";
import { myTSFun } from "./testts";
import img from "./test.jpg";

console.log("img: ", img);

console.log("a: ", a);
myTSFun("bbo");

console.log(__TEST__);

// rollup 插件执行顺序就是插件引入的顺序

console.log("hello rollup: ", pkg);
