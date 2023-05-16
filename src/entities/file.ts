export interface IFile {
  filename: string;
  content: string;
}

export interface IFileModel extends IFile {
  id: string;
  createdAt: Date;
}
