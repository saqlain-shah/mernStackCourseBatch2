import multer from "multer";

const storage = multer.diskStorage({
  destination:function (req, file, cb) {
    cb(null, 'upload/'); // Set the directory where uploaded images will be stored
    // Note: You are responsible for creating the directory when providing destination as a function.
    // When passing a string, multer will make sure that the directory is created for you.({dest:'./upload})
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;