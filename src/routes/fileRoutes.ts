import { Request, Response, Router } from "express";

import { UploadFileController } from "../controllers/upload-file";
import { GetFilesController } from "../controllers/get-files";
import { GetFileByNameController } from "../controllers/get-file-by-name";
import { DeleteFileController } from "../controllers/delete-file";
import { DeleteAllFilesController } from "../controllers/delete-all-files";

import { MongodbUploadFileRepository } from "../repositories/mongodb/upload-file";
import { MongodbGetFilesRepository } from "../repositories/mongodb/get-files";
import { MongodbGetFileByNameRepository } from "../repositories/mongodb/get-file-by-name";
import { MongodbDeleteFileRepository } from "../repositories/mongodb/delete-file";
import { MongodbDeleteAllFilesRepository } from "../repositories/mongodb/delete-all-files";

import { multerUpload } from "../config/multerConfig";

const router = Router();

router.post("/upload", multerUpload, async (req: Request, res: Response) => {
  const uploadFileController = new UploadFileController(
    new MongodbUploadFileRepository()
  );
  const result = await uploadFileController.handle({
    files: Object.values(req?.files || {}),
  });

  res.status(result.statusCode).json({ message: result.body });
});

router.get("/files", async (req: Request, res: Response) => {
  const getFilesController = new GetFilesController(
    new MongodbGetFilesRepository()
  );
  const result = await getFilesController.handle();

  res.status(result.statusCode).json({ files: result.body });
});

router.get("/files/:filename", async (req: Request, res: Response) => {
  const getFileByNameController = new GetFileByNameController(
    new MongodbGetFileByNameRepository()
  );
  const result = await getFileByNameController.handle({ params: req.params });

  res.status(result.statusCode).json({ file: result.body });
});

router.delete("/files/:filename", async (req: Request, res: Response) => {
  const deleteFileController = new DeleteFileController(
    new MongodbDeleteFileRepository()
  );
  const result = await deleteFileController.handle({ params: req.params });

  res.status(result.statusCode).json({ message: result.body });
});

router.delete("/files", async (req: Request, res: Response) => {
  const deleteAllFilesController = new DeleteAllFilesController(
    new MongodbDeleteAllFilesRepository()
  );
  const result = await deleteAllFilesController.handle();

  res.status(result.statusCode).json({ message: result.body });
});

export default router;
