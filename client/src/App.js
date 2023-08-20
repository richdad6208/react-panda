import React, { useState } from "react";
import Component from "./Component.js";
import "./App.css";
function App() {
  const [temp, setTemp] = useState(1);
  const increment = () => {
    setTemp(temp + 1);
  };
  return (
    <div>
      <h1>
        우리 인생의 매일은 우리가 그 어떤 차이를 만들 수 있는 작은 변화의 경계에
        있는 순간입니다.
      </h1>
      {temp}
      <button onClick={increment}>증가버튼</button>
      <Component />
    </div>
  );
}

export default App;
