import React, { useState } from "react";
import Upload from "./component/post/Upload";
import Heading from "./component/Heading";
import List from "./component/post/List";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const [contentList, setContentList] = useState([]);
  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/"
          element={
            <List contentList={contentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/upload"
          element={
            <Upload contentList={contentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
