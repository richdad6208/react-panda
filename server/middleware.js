import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";
import path from "path";

const s3 = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

export const upload = multer({
  dest: "uploads/images",
  storage: multerS3({
    s3: s3,
    acl: "public-read-write",
    bucket: "react-study-bucket",
    key: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, `image/${Date.now()}${extension}`);
    },
  }),
});
