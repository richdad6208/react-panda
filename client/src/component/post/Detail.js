import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Detail() {
  const params = useParams();
  const body = params;
  const [postDetail, setPostDetail] = useState({});
  useEffect(() => {
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.post);
          setPostDetail(response.data.post);
        } else {
          console.log("데이터 없음");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {postDetail.title}, {postDetail.content}
    </div>
  );
}

export default Detail;
