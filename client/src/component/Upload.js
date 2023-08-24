import React, { useState } from "react";
import axios from "axios";
function Upload(props) {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    let body = { title: Title, content: Content };
    axios
      .post("/api/post", body)
      .then((response) => {
        console.log(response, "성공");
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
