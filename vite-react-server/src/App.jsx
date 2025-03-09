import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import A from "./pages/a";
import B from "./pages/b";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/a">a</Link>
          </li>
          <li>
            <Link to="/b">b</Link>
          </li>
        </ul>
      </nav>
      <h1>Vite + React</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a" element={<A />}></Route>
        <Route path="/b" element={<B />}></Route>
      </Routes>
    </>
  );
}

export default App;
