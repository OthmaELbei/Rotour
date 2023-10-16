import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import NotFound from "./NotFound";
function App() {
  let postsData = [
    {
      id: 1,
      title: "Hello worde",
      body: "ertyuio  oo",
    },
    {
      id: 2,
      title: "Hello WORDS",
      body: "ertyuio f  oo",
    },
    {
      id: 3,
      title: "Hello firtS",
      body: "ertyuio fg  oo",
    },
  ];

  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        <div>
          <Link to="/hello">
            <button style={{ fontSize: "23px" }}>Hello</button>
          </Link>
          <Link to={"/home"}>
            <button style={{ fontSize: "23px" }}>home</button>
          </Link>
          <Link to="/posts">
            <button style={{ fontSize: "23px" }}>pasts</button>
          </Link>
        </div>

        {/* Router */}
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postDetails/:postId" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
