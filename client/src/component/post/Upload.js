import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Upload(props) {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      console.log("모든 항목을 채워주세요");
    }
    let body = { title: Title, content: Content };
    axios
      .post("/api/post", body)
      .then((response) => {
        if (response.data) {
          alert("글작성이 성공하였습니다");
          navigate("/");
        } else {
          alert("글작성이 실패하였습니다");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container py-4">
      <div className="form-wrapper">
        <input
          className="form__title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="form__content"
          value={Content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button className="form__button" onClick={onSubmit}>
          완료
        </button>
      </div>
    </div>
  );
}

export default Upload;
