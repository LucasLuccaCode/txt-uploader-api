import {
  HttpStatusCode,
  IHttpResponse,
  IMulterHttpRequest,
} from "../protocols";

import { IUploadFileRepository } from "./protocols";

export class UploadFileController {
  constructor(private readonly uploadFileRepository: IUploadFileRepository) {}

  async handle({
    file,
  }: IMulterHttpRequest<null, null, null>): Promise<IHttpResponse<string>> {
    try {
      if (!file) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Nenhum arquivo foi enviado.",
        };
      }

      const { buffer, originalname: filename } = file;

      const content = buffer.toString("utf-8");

      await this.uploadFileRepository.uploadFile({
        filename,
        content,
      });

      return {
        statusCode: HttpStatusCode.CREATED,
        body: `Arquivo ${filename} salvo.`,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: "Erro ao tentar salvar arquivo, tente novamente mais tarde.",
      };
    }
  }
}
