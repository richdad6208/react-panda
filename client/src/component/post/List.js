import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function List() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        if (response) {
          setPosts([...response.data.posts]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {posts
        .map((item, idx) => {
          return (
            <div className="board-wrapper" key={idx}>
              <Link to={`/post/${item.postNum}`}>
                <p className="board__title">제목: {item.title}</p>
                <p className="board__content">내용: {item.content}</p>
              </Link>
            </div>
          );
        })
        .reverse()}
    </>
  );
}

export default List;
