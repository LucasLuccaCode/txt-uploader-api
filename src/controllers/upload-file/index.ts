import CryptoJS from "crypto-js";

import {
  HttpStatusCode,
  IHttpResponse,
  IMulterHttpRequest,
} from "../protocols";

import { IUploadFileRepository } from "./protocols";

export class UploadFileController {
  constructor(private readonly uploadFileRepository: IUploadFileRepository) {}

  async handle({
    files,
  }: IMulterHttpRequest<null>): Promise<IHttpResponse<string>> {
    try {
      if (!files.length) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Nenhum arquivo foi enviado.",
        };
      }

      const SECRET_KEY = process.env.SECRET_KEY || "secret";

      for (const file of files) {
        const { buffer, originalname: filename } = file;

        const content = buffer.toString("utf-8");
        const encryptedContent = CryptoJS.AES.encrypt(
          content,
          SECRET_KEY
        ).toString();

        await this.uploadFileRepository.uploadFile({
          filename,
          content: encryptedContent,
        });
      }

      const body =
        files.length > 1
          ? `${files.length} arquivos salvos com sucesso.`
          : `${files[0].originalname} salvo com sucesso.`;

      return {
        statusCode: HttpStatusCode.CREATED,
        body,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: "Erro ao tentar salvar arquivos, tente novamente mais tarde.",
      };
    }
  }
}
