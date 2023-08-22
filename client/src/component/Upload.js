import React, { useState } from "react";

function Upload(props) {
  const [content, setContent] = useState("");
  const onSubmit = () => {
    let tempArr = [...props.contentList];
    tempArr.push(content);
    props.setContentList([...tempArr].reverse());
    setContent("");
  };
  return (
    <div class="container py-4">
      <div class="form-wrapper">
        <input
          class="form__title"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <textarea class="form__content"></textarea>
        <button class="form__button" onClick={onSubmit}>
          완료
        </button>
      </div>
    </div>
  );
}

export default Upload;
