import { HttpStatusCode, IHttpRequest, IHttpResponse } from "../protocols";
import { IDeleteFileRepository } from "./protocols";

export class DeleteFileController {
  constructor(private readonly deleteFileRepository: IDeleteFileRepository) {}

  async handle({ params }: IHttpRequest<null>): Promise<IHttpResponse<string>> {
    try {
      const filename = params?.filename;

      if (!filename) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Nome do arquivo para deletar ausente.`,
        };
      }

      await this.deleteFileRepository.deleteFile({
        filename,
      });

      return {
        statusCode: HttpStatusCode.OK,
        body: `Arquivo ${filename} deletado.`,
      };
    } catch (error: any) {
      return {
        statusCode: HttpStatusCode.NOT_FOUND,
        body: error.message,
      };
    }
  }
}
