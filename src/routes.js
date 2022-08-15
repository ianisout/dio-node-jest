import { response, Router } from 'express'

const routes = Router()

const database = ['ian']

routes.get('/users', (req, res) => {
  return res.status(200).json(database)
})

routes.post('/users', (req, res) => {
  const { name } = req.body
  database.push(name)
  
  return res.status(201).json({"msg": `Usuário ${name} criado`})
})

export { routes }