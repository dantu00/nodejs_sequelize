import { Request, Response } from "express";
import { body, param, query as validatorQuery } from "express-validator";
import httpsStatus from "http-status";
import { errorHandlerWrapper } from "@/utils";
import httpStatus from "http-status";
import { UserService } from "@/services";

const userService = new UserService();
/** Create User */
export const createUserValidator = () => {
  return [
    body("name").notEmpty().withMessage("User full name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
};

const createUserHandler = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await userService.createUser({ name, email, password });
  res.status(httpsStatus.OK).json(user);
};

export const createUser = errorHandlerWrapper(createUserHandler);

/** Read all users and filter by full name*/
export const readUsersValidator = () => {
  return [
    validatorQuery("name").notEmpty().withMessage("User full name is required"),
  ];
};

const readUsersHandler = async (req: Request, res: Response) => {
  const { name } = req.query;
  const users = await userService.readUsers();

  res.status(httpStatus.OK).json(users);
};

export const readUsers = readUsersHandler;

/** Read a user by id */
export const readUserValidator = () => {
  return [param("id").notEmpty().withMessage("User id is required")];
};

const readUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.readUser(id);
  res.status(httpStatus.OK).json(user);
};

export const readUser = errorHandlerWrapper(readUserHandler);

/** Update user */
export const updateUserValidator = () => {
  return [param("id").notEmpty().withMessage("User id is required")];
};

const updateUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const updatedUser = await userService.updateUser({
    id: Number(id),
    name,
    email,
    password,
  });
  res.status(httpStatus.OK).json(updatedUser);
};

export const updateUser = errorHandlerWrapper(updateUserHandler);

/** Delete user */
export const deleteUserValidator = () => {
  return [param("id").notEmpty().withMessage("User id is required")];
};

const deleteUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userService.deleteUser(id);
  res.status(httpsStatus.OK).json(result);
};

export const deleteUser = errorHandlerWrapper(deleteUserHandler);
