import UserFacade from "./facade";
import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import User from "../../models/user.model";

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log("pin", req.params);

    const users: any[] = await UserFacade.findAll();
    res.status(HttpStatusCode.OK).json(users);
  } catch (error) {
    next(error);
  }
}

export async function addUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const user = {
      id: req.body.id,
      name: req.body.name,
    };
    const users: any[] = await UserFacade.addUser(user);

    res.status(HttpStatusCode.OK).json(users);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const user = {
      id: req.body.id,
      name: req.body.name,
    };
    const users: any[] = await UserFacade.updateUser(user);

    res.status(HttpStatusCode.OK).json(users);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = req.params.id;
    const users: any[] = await UserFacade.deleteUser(userId);

    res.status(HttpStatusCode.OK).json(users);
  } catch (error) {
    next(error);
  }
}

export async function findUserById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = req.params.id;
    const users: any[] = await UserFacade.findUserById(userId);

    res.status(HttpStatusCode.OK).json(users);
  } catch (error) {
    next(error);
  }
}
