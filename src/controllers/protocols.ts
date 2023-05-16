export interface IHttpRequest<P, Q, B> {
  params?: P;
  query?: Q;
  body?: B;
}

export interface IMulterHttpRequest<P, Q, B> extends IHttpRequest<P, Q, B> {
  file?: Express.Multer.File;
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
