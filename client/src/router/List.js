import React, { useState } from "react";

function List() {
  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);
  let tempArr = [];
  const onSubmit = () => {
    tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
  };
  return (
    <div>
      {contentList.map((item, idx) => {
        return (
          <div className="content-box" key={idx}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default List;
