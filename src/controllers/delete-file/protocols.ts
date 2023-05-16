export interface IDeleteFileParams {
  filename: string;
}

export interface IDeleteFileRepository {
  deleteFile({ filename }: IDeleteFileParams): Promise<void>;
}
