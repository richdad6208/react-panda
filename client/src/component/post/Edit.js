// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import ImageUpload from "./imageUpload";
// function Edit(props) {
//   const { postNum } = useParams();
//   const [Content, setContent] = useState("");
//   const [Title, setTitle] = useState("");
//   const {
//     state: { beforeImage },
//   } = useLocation();
//   const [filePath, setFilePath] = useState(beforeImage);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const body = { postNum };
//     axios
//       .post("/api/post/editBefore", body)
//       .then((response) => {
//         if (response.data.success) {
//           setTitle(response.data.post.title);
//           setContent(response.data.post.content);
//           setFilePath(response.data.post.filePath);
//         } else {
//           console.log("데이터가 없습니다");
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (Title === "" || Content === "") {
//       console.log("모든 항목을 채워주세요");
//     }
//     let body = { title: Title, content: Content, postNum };
//     axios
//       .post("/api/post/editAfter", body)
//       .then((response) => {
//         if (response.data) {
//           alert("글 수정이 성공하였습니다");
//           navigate(`/post/${postNum}`);
//         } else {
//           alert("글 수정이 실패하였습니다");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <div className="container py-4">
//       <div className="form-wrapper">
//         <input
//           className="form__title"
//           type="text"
//           value={Title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <ImageUpload filePath={filePath} setFilePath={setFilePath} />
//         <textarea
//           className="form__content"
//           value={Content}
//           onChange={(e) => {
//             setContent(e.target.value);
//           }}
//         ></textarea>
//         <div style={{ display: "flex", alignSelf: "flex-end" }}>
//           <button className="form__button" onClick={onSubmit}>
//             완료
//           </button>

//           <button
//             style={{ background: "red" }}
//             className="form__button"
//             onClick={() => {
//               navigate(-1);
//             }}
//           >
//             취소
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Edit;
