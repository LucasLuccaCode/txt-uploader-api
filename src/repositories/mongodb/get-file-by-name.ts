import { FileModel } from "../../models/File";

import {
  IGetFileByNameRepository,
  IGetFileByNameParams,
} from "../../controllers/get-file-by-name/protocols";

import { IFileModel } from "../../entities/file";

export class MongodbGetFileByNameRepository
  implements IGetFileByNameRepository
{
  async getFileByName({ filename }: IGetFileByNameParams): Promise<IFileModel> {
    const file = await FileModel.findOne(
      { filename },
      { filename: true, content: true, createdAt: true }
    );

    if (!file) {
      throw new Error("Arquivo não encontrado.");
    }

    const { _id, ...fileWithoutId } = file.toObject();

    return {
      id: _id.toHexString(),
      ...fileWithoutId,
    };
  }
}
