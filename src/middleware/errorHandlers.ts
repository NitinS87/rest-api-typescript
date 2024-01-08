import { Request, Response, NextFunction } from "express";

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
): void => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};

// ignore request for FavIcon. so there is no error in browser
export const ignoreFavicon = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (req.originalUrl.includes("favicon.ico")) {
    res.status(204).end();
  }
  next();
};

// ignore request for robots.txt. so there is no error in browser
export const ignoreRobotsTxt = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (req.originalUrl.includes("robots.txt")) {
    res.status(204).end();
  }
  next();
};

// ignore request for gear.png. so there is no error in browser
export const ignoreGearPng = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (req.originalUrl.includes("gear.png")) {
    res.status(204).end();
  }
  next();
};
