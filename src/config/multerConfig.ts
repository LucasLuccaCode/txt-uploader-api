import path from "path";
import multer from "multer";

export const upload = multer({
  fileFilter(req, file, cb) {
    const allowedExtensions = [".txt"];

    const ext = path.extname(file.originalname);
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Apenas arquivos .txt são permitidos."));
    }
  },
});
