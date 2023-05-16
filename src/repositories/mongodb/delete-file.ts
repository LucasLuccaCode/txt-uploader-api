import { FileModel } from "../../models/File";

import {
  IDeleteFileParams,
  IDeleteFileRepository,
} from "../../controllers/delete-file/protocols";

export class MongodbDeleteFileRepository implements IDeleteFileRepository {
  async deleteFile({ filename }: IDeleteFileParams): Promise<void> {
    const { deletedCount } = await FileModel.deleteOne({ filename });

    if (deletedCount === 0) {
      throw new Error("Este arquivo não existe na api.");
    }
  }
}
