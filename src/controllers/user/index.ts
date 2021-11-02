import { Request, Response } from "express";
import { User } from "~/services/user";

export const userList = (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const user = new User(name);
    res.json(user);
  } catch (e) {
    res.status(404).send("BBBB");
  }
};
