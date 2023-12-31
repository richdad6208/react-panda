import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

const DeatailWrapper = styled.div`
  background: whitesmoke;
  border-radius: 10px;
  padding: 5em 3em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  text-align: left;
  h4 {
    font-size: 25px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
  div {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 10px;
    }
  }
`;
const Button = styled.button`
  background: ${(props) => props.$bgColor};
  color: white;
  padding: 0.5em 0.7em;
`;

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const body = params;
  const [postDetail, setPostDetail] = useState({});
  const [flag, setFlag] = useState(false);
  function deleteItem() {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("글 삭제가 성공하였습니다");
            navigate("/");
          } else {
            alert("글 삭제가 실패하였습니다");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  useEffect(() => {
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setFlag((prev) => !prev);
          setPostDetail(response.data.post);
        } else {
          console.log("데이터 없음");
        }
      })
      .catch((err) => console.log(err));
  }, [body]);
  console.log(postDetail);
  return (
    <>
      {flag ? (
        <DeatailWrapper>
          <h4>제목: {postDetail.title}</h4>
          <hr />
          <img src={postDetail.filePath} alt="" style={{ width: "100%" }} />
          <p>내용: {postDetail.content}</p>
          <div>
            <Link
              to={`/edit/${postDetail.postNum}`}
              state={{ beforeImage: postDetail.filePath }}
            >
              <Button $bgColor="dodgerblue">수정</Button>
            </Link>
            <Link to="/">
              <Button $bgColor="crimson" onClick={deleteItem}>
                삭제
              </Button>
            </Link>
          </div>
        </DeatailWrapper>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default Detail;
