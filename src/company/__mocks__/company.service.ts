import { companyStub } from "../test/stubs/company.stub";

export const CompanyService = jest.fn().mockReturnValue({
  createCompany: jest.fn().mockResolvedValue(companyStub()),
  getAllCompany: jest.fn().mockResolvedValue([companyStub()]),
  findOne: jest.fn().mockResolvedValue(companyStub()),
  deleteCompany: jest
    .fn()
    .mockReturnValue({ message: "Foydalanuvchi yoq qilindi" }),
});
