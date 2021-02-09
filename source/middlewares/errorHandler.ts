import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
};
