import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

export default function render() {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   
    <h1>Vite + HMRaaa</h1>
   
  </div>
`;
}
render();

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render();
  });
}
