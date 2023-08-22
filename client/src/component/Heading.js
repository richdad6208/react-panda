import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="container">
      <h1>게시판글 등록하기</h1>
      <nav>
        <Link className="nav-item" to="/">
          home
        </Link>
        <Link className="nav-item" to="/upload">
          upload
        </Link>
        <Link className="nav-item" to="/list">
          list
        </Link>
      </nav>
    </div>
  );
}

export default Heading;
