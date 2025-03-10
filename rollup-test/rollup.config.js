import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";
import replace from "@rollup/plugin-replace";
import ts from "@rollup/plugin-typescript"; // 如果项目中有tsconfig.json相关配置，也会作用于该插件。或者使用rollup-plugin-typescript2 控制台有ts报错信息
import eslint from "@rollup/plugin-eslint";
import image from "@rollup/plugin-image";
import strip from "@rollup/plugin-strip"; // 删除无用代码。外部的console.log等

const mode = process.env.mode;
const isLocal = mode === "local";

export default [
  // 输出不同格式文件的方法，使用一个数组
  {
    input: "index.js",
    external: ["react"],
    plugins: [
      json(),
      resolve(),
      alias({
        entries: {
          a: "./a",
        },
      }),
      commonjs(),
      image(),
      ts(),
      // strip(),
      // eslint({
      //   throwOnError: true, // 如果有语法报错，则编译不通过
      // }),
    ],
    output: {
      file: "dist/index.es.js",
      format: "es",
      name: "Index ",
    },
  },
  {
    input: "index.js",
    external: ["react"], // 不想把一些包打包进来
    // external: {
    //   'react': "React"
    // },
    plugins: [
      json(),
      resolve(),
      alias({
        entries: {
          a: "./a",
        },
      }),
      commonjs(),
      image(),
      ts(),
      // eslint({
      //   throwOnError: true,
      // }),
      // strip(),
      replace({
        __TEST__: 123,
      }),
    ],
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "Index ",
        // plugins: [terser()], // 代码编译完成之后才会执行
        banner: "/**this is banner*/",
      },
      // {
      //   file: "dist/index.es.js",
      //   format: "es",
      //   name: "Index ",
      // },
    ],
  },
];
