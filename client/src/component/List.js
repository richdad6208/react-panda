import React, { useEffect, useState } from "react";
import axios from "axios";
const body = { text: "이것은 프론트단에서 백단으로 보내는 작은 쪽지이다" };
function List(props) {
  useEffect(() => {
    axios
      .post("/api/test", body)
      .then((res) => {
        console.log(setText(res.data.text));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [text, setText] = useState("");
  return (
    <div className="container">
      <h1>{text}</h1>
      {props.contentList.map((item, idx) => {
        return (
          <div className="content-box" key={idx}>
            {item}
          </div>
        );
      })}
      <button>전송</button>
    </div>
  );
}

export default List;
