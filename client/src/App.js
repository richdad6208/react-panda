import React from "react";
import Upload from "./component/post/Upload";
import Heading from "./component/Heading";
import List from "./component/post/List";
import Detail from "./component/post/Detail";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
