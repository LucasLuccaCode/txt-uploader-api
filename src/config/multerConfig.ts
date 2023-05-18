import path from "path";
import multer from "multer";

const maxFiles = 10;

export const multerUpload = multer({
  fileFilter(req, file, cb) {
    const allowedExtensions = [".txt"];

    const filename = file.originalname;
    const ext = path.extname(filename);
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      // cb(new Error(`Apenas arquivos .txt são permitidos.`));
      cb(
        new Error(
          `${filename} não é um arquivo .txt, apenas arquivos txt são permitidos.`
        )
      );
    }
  },
}).array("file", maxFiles);
