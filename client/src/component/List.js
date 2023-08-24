import React from "react";

function List(props) {
  return (
    <div className="container">
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
