import { Request, Response } from 'express';
import { database } from '../database';

export class UsersController {
  createUser(req: Request, res: Response): Response {
    const { name } = req.body;

    if (name.length < 1) {
      return res
        .status(403)
        .json({ msg: 'Nome de usuário não pode estar vazio' });
    }

    database.push(name);
    return res.status(201).json({ msg: `Usuário ${name} criado` });
  }

  listUsers (req: Request, res: Response): Response {
    return res.status(200).json(database)
  }
}
