import { IFileModel } from "../../entities/file";

export interface IGetFileByNameParams {
  filename: string;
}

export interface IGetFileByNameRepository {
  getFileByName({ filename }: IGetFileByNameParams): Promise<IFileModel>;
}
