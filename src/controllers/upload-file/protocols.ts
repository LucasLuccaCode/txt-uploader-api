import { IFile } from "../../entities/file";

export interface IUploadFileParams extends IFile {}

export interface IUploadFileRepository {
  uploadFile({ filename, content }: IUploadFileParams): Promise<void>;
}
