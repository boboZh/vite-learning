(function (factory) {
  typeof define === 'function' && define.amd ? define(['path'], factory) :
  factory();
})((function () { 'use strict';

  var name = "rollup-test";
  var version = "1.0.0";
  var main = "index.js";
  var scripts = {
  	test: "echo \"Error: no test specified\" && exit 1"
  };
  var author = "";
  var license = "ISC";
  var description = "";
  var devDependencies = {
  	"@rollup/plugin-json": "^6.1.0",
  	rollup: "^2.79.2"
  };
  var pkg = {
  	name: name,
  	version: version,
  	main: main,
  	scripts: scripts,
  	author: author,
  	license: license,
  	description: description,
  	devDependencies: devDependencies
  };

  console.log("hello rollup: ", pkg);

}));
