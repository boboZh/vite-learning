let exampleOnLoadPlugin = {
  name: "example",
  setup(build) {
    let fs = require("fs");

    console.log(build.initialOptions);
    build.initialOptions.outdir = "lib"; //在setup函数最外层更改options，会立即生效
    build.start();
    build.end();
    build.onResolve({ filter: /\.txt$/ }, async (args) => ({
      path: args.path,
      namespace: "txt", //用于后面区分文件的加载，确定是否要处理这类型的文件，如果加了namespace， 那么onLoad钩子中{filter: /\.*/, namespace:'txt'},此时filter只作用于namespace下的文件
    }));
    build.onLoad(
      {
        filter: /\.txt$/, // filter筛选出哪些文件会执行，这里推荐使用正则表达式来匹配，因为go语言是支持正则匹配的。如果写函数（通过返回true/false来判断）的，只有js可以执行，这样性能会下降很多
      },
      async (args) => {
        let text = await fs.promises.readFile(args.path, "utf-8");
        return {
          contents: JSON.stringify(text.split(/\s+/)), //esbuild默认可以执行js文件，但是txt文件是识别不到的，此处contents就是处理txt文件
          loader: json, //使用json loader解析contents
        };
      }
    );
  },
};
require("esbuild")
  .build({
    entryPoints: ["index.jsx"],
    bundle: true,
    outdir: "dist",
    loader: {
      ".png": "dataurl",
    },
    plugins: [],
  })
  .catch(() => process.exit(1));
