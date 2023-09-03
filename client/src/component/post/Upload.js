import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Upload(props) {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const [filePath, setFilePath] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      console.log("모든 항목을 채워주세요");
    }
    console.log("");

    const inputFile = document.querySelector("#imageUpload").files[0];
    const formData = new FormData();
    formData.append("postImage", inputFile);
    axios
      .post("/api/post/imageUpload", formData)
      .then((response) => {
        if (response.data.success) {
          setFilePath(response.data.filePath);
          let body = {
            title: Title,
            content: Content,
            filePath: response.data.filePath,
          };
          console.log(body);
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
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-4">
      <form
        className="form-wrapper"
        method="post"
        encType="multipart/form-data"
      >
        <input
          className="form__title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="imageUpload">사진 업로드</label>
        <input id="imageUpload" name="postImage" type="file" accept="image/*" />
        <textarea
          className="form__content"
          value={Content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type="submit" className="form__button" onClick={onSubmit}>
          완료
        </button>
      </form>
    </div>
  );
}

export default Upload;
