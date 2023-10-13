import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Halle";
import Home from "./Home";
import PostsList from "./PostsList";
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/hello">
          <button style={{ fontSize: "23px" }}>Hello</button>
        </Link>

        <button style={{ fontSize: "23px" }}>home</button>
        <Link to="/posts">
          <button style={{ fontSize: "23px" }}>pasts</button>
        </Link>
      </div>

      {/* Router */}
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
