import React, { useState } from "react";

function Upload() {
  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);
  let tempArr = [];
  const onSubmit = () => {
    tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
  };
  return (
    <>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        제출
      </button>
    </>
  );
}

export default Upload;
