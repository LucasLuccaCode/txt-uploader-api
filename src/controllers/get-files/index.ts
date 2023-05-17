import { IGetFilesRepository } from "./protocols";
import { IFileModelWithoutContent } from "../../entities/file";
import { HttpStatusCode, IHttpResponse } from "../protocols";

export class GetFilesController {
  constructor(private readonly getFilesRepository: IGetFilesRepository) {}

  async handle(): Promise<IHttpResponse<IFileModelWithoutContent[] | string>> {
    try {
      const files = await this.getFilesRepository.getFiles();

      return {
        statusCode: HttpStatusCode.OK,
        body: files,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCode.OK,
        body: "Erro ao buscar arquivos, tente novamente mais tarde.",
      };
    }
  }
}
