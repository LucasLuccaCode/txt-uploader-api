import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const handleErrorMiddleware: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    return res.status(500).json({ message: err.message });
  } else {
    console.log("ok");
  }
  next();
};
