import CryptoJS from "crypto-js";

import { IFileModel } from "../../entities/file";

import { HttpStatusCode, IHttpRequest, IHttpResponse } from "../protocols";
import { IGetFileByNameRepository } from "./protocols";

export class GetFileByNameController {
  constructor(
    private readonly getFileByNameRepository: IGetFileByNameRepository
  ) {}

  async handle({
    params,
  }: IHttpRequest<null>): Promise<IHttpResponse<IFileModel | string>> {
    try {
      const filename = params?.filename;

      if (!filename) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Nome do arquivo para consultar ausente.`,
        };
      }

      const file = await this.getFileByNameRepository.getFileByName({
        filename,
      });

      const SECRET_KEY = process.env.SECRET_KEY || "secret";
      const decryptedContent = CryptoJS.AES.decrypt(
        file.content,
        SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);

      file.content = decryptedContent;

      return {
        statusCode: HttpStatusCode.OK,
        body: file,
      };
    } catch (error: any) {
      return {
        statusCode: HttpStatusCode.NOT_FOUND,
        body: error.message,
      };
    }
  }
}
