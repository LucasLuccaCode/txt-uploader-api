export interface IDeleteAllFilesRepository {
  deleteAllFiles(): Promise<number>;
}