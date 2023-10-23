import { describe, it, vi, expect } from "vitest";
import { JobRepository } from "../repositories/jobRepository";
import { JobService } from "./jobService";

const repositoryMock = {
  findByPosition: vi.fn(),
  create: vi.fn,
} as any as JobRepository;
const sut = new JobService(repositoryMock);

describe("JobService", () => {
  it("Should be able to return a error if the job position already exists", async () => {
    const paramsMock = {
      position: "developer",
      salary: 5000,
      city: "BH",
      technologies: "JS",
      company: "ARNIA DEV",
      jobDescription: "the job is to work as a developer fullstack",
      jobWebsite: "",
      url: "",
    };

    vi.spyOn(repositoryMock, "findByPosition").mockResolvedValue({
      position: "P.O",
      salary: 6000,
      city: "SP",
      technologies: "HTML",
      company: "LINKCOM",
      jobDescription: "the job is to work as a product owner",
    }) as any;

    const result = await sut.create(paramsMock);

    const expected = {
      error: true,
      message:
        "This Job position already exists in our Db please create a different one",
      status: 400,
    };

    expect(result).toStrictEqual(expected);
  });

  it("Should be able to create a job", async () => {
    const paramsMock = {
      position: "developer",
      salary: 5000,
      city: "BH",
      technologies: "JS",
      company: "ARNIA DEV",
      jobDescription: "the job is to work as a developer fullstack",
      jobWebsite: "",
      url: "",
    };

    const expected = {
      id: 1,
      position: "developer",
      salary: 5000,
      city: "BH",
      technologies: "JS",
      company: "ARNIA DEV",
      jobDescription: "the job is to work as a developer fullstack",
      jobWebsite: "",
      url: "",
    } as any;

    vi.spyOn(repositoryMock, "findByPosition").mockResolvedValue(null);
    vi.spyOn(repositoryMock, "create").mockReturnValue(expected);

    const result = await sut.create(paramsMock);
    expect(result).toStrictEqual(expected);
  });
});
