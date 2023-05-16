import { Request, Response, Router } from "express";

import { UploadFileController } from "../controllers/upload-file";
import { ListFilesController } from "../controllers/list-files";
import { ReadFileController } from "../controllers/read-file";
import { DeleteFileController } from "../controllers/delete-file";

import { MongodbUploadFileRepository } from "../repositories/mongodb/upload-file";
import { MongodbGetFilesRepository } from "../repositories/mongodb/get-files";
import { MongodbGetFileByNameRepository } from "../repositories/mongodb/get-file-by-name";
import { MongodbDeleteFileRepository } from "../repositories/mongodb/delete-file";

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

router.get("/files", async (req: Request, res: Response) => {
  const listFilesController = new ListFilesController(
    new MongodbGetFilesRepository()
  );
  const result = await listFilesController.handle();

  res.status(result.statusCode).json({ files: result.body });
});

router.get("/files/:filename", async (req: Request, res: Response) => {
  const readFileController = new ReadFileController(
    new MongodbGetFileByNameRepository()
  );
  const result = await readFileController.handle({ params: req.params });

  res.status(result.statusCode).json({ file: result.body });
});

router.delete("/files/:filename", async (req: Request, res: Response) => {
  const deleteFileController = new DeleteFileController(
    new MongodbDeleteFileRepository()
  );
  const result = await deleteFileController.handle({ params: req.params });

  res.status(result.statusCode).json({ message: result.body });
});

export default router;
