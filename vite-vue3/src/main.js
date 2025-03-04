import { createApp } from 'vue'
import App from './App'

// import Worker from "./worker?worker";
// import json from "../package.json";

// const worker = new Worker();
// worker.onmessage = function (e) {
//   console.log(e);
// };

// glob功能： 基于fast-glob

const globalModules = import.meta.glob('./glob/*-[0-9].js') // 名字可以使用正则表达式
const globalEagers = import.meta.glob('./glob/*', {
  eager: true,
})
console.log('globalEagers: ', globalEagers)
Object.entries(globalModules).forEach(([key, value]) => {
  value().then((module) => console.log(key + ':' + module.default))
})

createApp(App).mount('#app')
