import { Test } from "@nestjs/testing";
import { CompanyController } from "../company.controller";
import { CompanyService } from "../company.service";
import { Company } from "../models/company.model";
import { companyStub } from "./stubs/company.stub";
import { CreateCompany } from "../dto/create-company.dto";

jest.mock("../company.service");

describe("Company controller testing", () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService],
    }).compile();
    companyController = moduleRef.get<CompanyController>(CompanyController);
    companyService = moduleRef.get<CompanyService>(CompanyService);
    jest.clearAllMocks();
  });
  test("Company controller should be defined", () => {
    expect(companyController).toBeDefined();
  });
  test("Company service should be defined", () => {
    expect(companyController).toBeDefined();
  });

  describe("Find all company", () => {
    describe("when findAll company called", () => {
      let company: Company[];
      beforeAll(async () => {
        company = await companyController.getAllCompany();
      });
      test("then it should be call companyService", () => {
        expect(companyService.getAllCompany).toHaveBeenCalled();
      });
      test("then it should return companys", () => {
        expect(company).toEqual([companyStub()]);
      });
    });
  });

  describe("Get One company", () => {
    describe("when getByIdCompany called", () => {
      let company: Company | null;
      let id: number;

      beforeAll(async () => {
        id = companyStub().id as number;
        company = await companyController.findOne(String(id));
      });

      it("then it should call companyService.getByIdCompany", () => {
        expect(companyService.findOne).toHaveBeenCalledWith(id);
      });

      it("then it should return company", () => {
        expect(company).toEqual(companyStub());
      });
    });
  });

  describe("remove company", () => {
    let result: Object;
    beforeAll(async () => {
      result = await companyController.deleteCompany(String(companyStub().id));
    });
    test("then it should call companyService removed method", () => {
      expect(companyService.deleteCompany).toHaveBeenCalledWith(
        companyStub().id
      );
    });
    test("then it should remove company", () => {
      expect(result).toEqual({ message: "Foydalanuvchi yoq qilindi" });
    });
  });

  describe("Create company test", () => {
    describe("when createCompany is called", () => {
      let company: Company;
      let createCompanyDto: CreateCompany;

      beforeAll(async () => {
        createCompanyDto = {
          name: companyStub().name!,
          phone: companyStub().phone!,
          email: companyStub().email!,
          address: companyStub().address!,
        };
        company = await companyController.createCompany(createCompanyDto);
      });

      it("then it should call companyService.createCompany", () => {
        expect(companyService.createCompany).toHaveBeenCalledWith(
          createCompanyDto
        );
      });

      it("then it should return the created company", () => {
        expect(company).toEqual(companyStub());
      });
    });
  });
});
