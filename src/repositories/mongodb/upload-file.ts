import { FileModel } from "../../models/File";

import {
  IUploadFileParams,
  IUploadFileRepository,
} from "../../controllers/upload-file/protocols";

export class MongodbUploadFileRepository implements IUploadFileRepository {
  async uploadFile({ filename, content }: IUploadFileParams): Promise<void> {
    let file = await FileModel.findOne({ filename });

    if (file) {
      file.content = content;
    } else {
      file = new FileModel({
        filename,
        content,
      });
    }

    await file.save();
  }
}
