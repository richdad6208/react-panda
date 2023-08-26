import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function List(props) {
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
    <div className="container">
      {posts
        .map((item, idx) => {
          return (
            <Link key={idx} to={item.postNum}>
              <div className="board-wrapper">
                <span className="board__title">제목: {item.title}</span>
                <span className="board__content">내용: {item.content}</span>
              </div>
            </Link>
          );
        })
        .reverse()}
    </div>
  );
}

export default List;
