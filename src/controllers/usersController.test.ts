import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./usersController";

describe('Users Controller', () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse()

  it('Should list users', () => {
    usersController.listUsers(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toHaveLength(2)
  })

  it('Should create a new user', () => {
    mockRequest.body = {
      name: 'New User'
    }

    usersController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({ msg: `Usuário New User criado` });
  })

  it('Should not create a new user with a blank name', () => {
    mockRequest.body = {
      name: ''
    }

    usersController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(403)
    expect(mockResponse.state.json).toMatchObject({ msg: 'Nome de usuário não pode estar vazio' });
  })
});
