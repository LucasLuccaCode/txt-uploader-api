import { IFileModel } from "../../entities/file";
import { HttpStatusCode, IHttpRequest, IHttpResponse } from "../protocols";
import { IGetFileByNameRepository } from "./protocols";

interface IFileParams {
  filename: string;
}

export class ReadFileController {
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
          body: `Parâmetro com nome do arquivo ausente.`,
        };
      }

      const file = await this.getFileByNameRepository.getFileByName({
        filename,
      });

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
