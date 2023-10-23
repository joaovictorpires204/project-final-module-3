import { describe, test, it, vi, expect, beforeEach } from "vitest";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { AuthService } from "./authService";
import { UserRepository } from "../../users/repositories/userRepository";

const userRepositoryMock = { findByEmail: vi.fn() } as any as UserRepository;
const sut = new AuthService(userRepositoryMock);

describe("AuthService", () => {

    beforeEach(() => { 
        vi.clearAllMocks()
    })
  it("Should be alble to return an error if email not found", async () => {
    const paramsMock = { email: "p@gmail.com", password: "11212121" };
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(null);

    const result = await sut.auth(paramsMock);

    const expected = {
      error: true,
      message: "Email or password is not valid",
      status: 400,
    };

    expect(result).toStrictEqual(expected);
  });

  it("Should be able to return an error if the password is invalid", async () => {
    const paramsMock = { email: "p@gmail.com", password: "12345678" };
    const userMock = { _id: 1, name: "Joao", password: "12345678" } as any;
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(userMock);
    vi.spyOn(bcrypt, "compareSync").mockReturnValue(false);

    const result = await sut.auth(paramsMock);

    const expected = {
      error: true,
      message: "Email or password is not valid",
      status: 400,
    };

    expect(result).toStrictEqual(expected);
  });

  it("Should be alble to return the token and the user", async () => {
    const paramMock = { email: "p@gmail.com", password: "12345678" };
    const userMock = {
      _id: 1,
      name: "João",
      email: "p@gmail.com",
      password: "12345678",
    } as any;
    vi.spyOn(userRepositoryMock, "findByEmail").mockResolvedValue(userMock);
    vi.spyOn(bcrypt, "compareSync").mockReturnValue(true);
    vi.spyOn(JWT, "sign").mockReturnValue("aowdaodwonda" as any);

    const result = await sut.auth(paramMock);

    const expected = {
      token: "aowdaodwonda",
      user: { id: 1, name: "João", email: "p@gmail.com" },
    };

    expect(result).toStrictEqual(expected)
  });
});
