import { FileModel } from "../../models/File";

import { IDeleteAllFilesRepository } from "../../controllers/delete-all-files/protocols";

export class MongodbDeleteAllFilesRepository implements IDeleteAllFilesRepository {
  async deleteAllFiles(): Promise<number> {
    const { deletedCount } = await FileModel.deleteMany()

    if(deletedCount === 0){
      throw new Error("Nenhum arquivo deletado.")
    }

    return deletedCount
  }
}
