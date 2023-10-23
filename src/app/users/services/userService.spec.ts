import { describe, it, vi, expect } from "vitest";
import bcrypt from "bcrypt";

import { UserService } from "./userService";
import { UserRepository } from "../repositories/userRepository";

const repositoryMock = {
  findByEmail: vi.fn(),
  create: vi.fn(),
} as any as UserRepository;

const sut = new UserService(repositoryMock);

describe("UserService", () => {
  it("should be able to return a error if user already exists", async () => {
    const paramsMock = {
      name: "João",
      email: "joaovictor@gmail.com",
      password: "123456789",
    };
    vi
      .spyOn(repositoryMock, "findByEmail")
      .mockResolvedValue({
        id: "12131565",
        name: "Pedro",
        email: "joaovictor@gmail.com",
        password: "123456789",
        createdAt: "",
        updatedAt: "" 
      }) as any;

    const result = await sut.create(paramsMock);

    const expected = {
      error: true,
      message: "User already exists",
      status: 400,
    };

    expect(result).toStrictEqual(expected);
  });

  it("Should be able to create a user", async () => {
    const paramsMock = {name: "João", email: "joaovictor@gmail.com",password: "123456789" };
    const expected = {id: 1,name: "João", email: "joaovictor@gmail.com", password: "1234567adowojadoj89", createdAt: "", updatedAt: "" } as any;
    
    vi.spyOn(repositoryMock, "findByEmail").mockResolvedValue(null);
    vi.spyOn(repositoryMock, "create").mockReturnValue(expected);
    vi.spyOn(bcrypt, "hashSync").mockReturnValue("jdwidiwdi");
    
    const result = await sut.create(paramsMock);

    expect(result).toStrictEqual(expected);
  }); 
});
