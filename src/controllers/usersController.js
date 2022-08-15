import { database } from "../database.js"

const usersController = {
  createUser (req, res) {
    const { name } = req.body
  
    if (name.length < 1) {
      return res.status(403).json({msg: "Nome de usuário não pode estar vazio"})
    }
  
    database.push(name)
    return res.status(201).json({"msg": `Usuário ${name} criado`})
  },
  listUsers (req, res) {
    return res.status(200).json(database)
  }
}

export { usersController }