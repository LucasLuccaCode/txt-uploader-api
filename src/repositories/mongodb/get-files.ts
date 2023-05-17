import { FileModel } from "../../models/File";

import { IGetFilesRepository } from "../../controllers/get-files/protocols";
import { IFileModelWithoutContent } from "../../entities/file";

export class MongodbGetFilesRepository implements IGetFilesRepository {
  async getFiles(): Promise<IFileModelWithoutContent[]> {
    const files = await FileModel.find({}, { filename: true, createdAt: true });

    return files.map((file) => {
      const { _id, ...fileWithoutId } = file.toObject();

      return {
        id: _id.toHexString(),
        ...fileWithoutId,
      };
    });
  }
}
