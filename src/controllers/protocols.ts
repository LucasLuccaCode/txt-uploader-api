export interface IHttpRequest<T> {
  params?: any;
  query?: any;
  body?: T;
}

export interface IMulterHttpRequest<T> extends IHttpRequest<T> {
  files: Express.Multer.File[];
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export interface IHttpResponse<B> {
  statusCode: HttpStatusCode;
  body: B;
}
