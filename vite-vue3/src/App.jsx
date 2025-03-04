import { defineComponent } from "vue";
// import "@styles/index.css";
import '@styles/test.less';
import classes from '@styles/test.module.css'
import Logo from './assets/vue.svg'
// import test from './test?url'  // ?url 返回文件路径
// import test from './test?raw' // ?raw 文件代码以字符串的形式引用
// import worker / worker inline  
// WebWorker帮助我们构建更高性能的工具，将计算量很大的进程放到一个线程
export default defineComponent({
  setup() {
    return () => {
      return <>
        <div id='app' class={`root ${classes.moduleClass}`} >hello vite</div>
        <input type="text" placeholder="input here" />
          <img src={Logo} />
        </>
    }
  }
})