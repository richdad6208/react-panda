import React from "react";
import Upload from "./component/post/Upload";
import Heading from "./component/Heading";
import List from "./component/post/List";
import Detail from "./component/post/Detail";
import { Routes, Route } from "react-router-dom";
import Project from "./component/Project";
import Edit from "./component/post/Edit";

function App() {
  return (
    <div className="container">
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
