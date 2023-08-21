import React, { useState } from "react";
function Test() {
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
      <div className="input-wrapper">
        <h1>게시판글 등록하기</h1>
        
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
      </div>
    </>
  );
}

export default Test;
