import { HttpStatusCode, IHttpResponse } from "../protocols";
import { IDeleteAllFilesRepository } from "./protocols";

export class DeleteAllFilesController {
  constructor(private readonly deleteFileRepository: IDeleteAllFilesRepository) {}

  async handle(): Promise<IHttpResponse<string>> {
    try {
     const deletedCount = await this.deleteFileRepository.deleteAllFiles();

      return {
        statusCode: HttpStatusCode.OK,
        body: `${deletedCount} arquivo${ deletedCount === 1 ? ' deletado' : 's deletados'}.`,
      };
    } catch (error: any) {
      return {
        statusCode: HttpStatusCode.NOT_FOUND,
        body: error.message,
      };
    }
  }
}
