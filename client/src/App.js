import React from "react";
import Test from "./Test";
import Upload from "./router/Upload";
import Heading from "./router/Heading";
import List from "./router/List";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
