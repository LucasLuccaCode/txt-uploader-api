import { IFileModelWithoutContent } from "../../entities/file";

export interface IGetFilesRepository {
  getFiles(): Promise<IFileModelWithoutContent[]>;
}
