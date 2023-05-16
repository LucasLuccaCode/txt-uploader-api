import { Request, Response, Router } from "express";
import { UploadFileController } from "../controllers/upload-file";
import { MongodbUploadFileRepository } from "../repositories/mongodb/upload-file";
import { upload } from "../config/multerConfig";

const router = Router();

router.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const uploadFileController = new UploadFileController(
      new MongodbUploadFileRepository()
    );
    const result = await uploadFileController.handle({ file: req?.file });

    res.status(result.statusCode).json({ message: result.body });
  }
);

export default router;
