import axios from "axios";

function ImageUpload({ filePath, setFilePath }) {
  if (filePath) {
    setFilePath(filePath);
  }
  function uploadImage(e) {
    const formData = new FormData();
    formData.append("postImage", e.target.files[0]);
    axios
      .post("/api/post/imageUpload", formData)
      .then((response) => {
        if (response.data.success) {
          setFilePath(response.data.filePath);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <form method="post" encType="multipart/form-data">
      <label htmlFor="imageUpload">사진 업로드</label>
      <input
        id="imageUpload"
        name="postImage"
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />
    </form>
  );
}

export default ImageUpload;
