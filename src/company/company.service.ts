import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.model";
import { CreateCompany } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { Op } from "sequelize";
import { log } from "console";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyModel: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompany): Promise<Company> {
    return this.companyModel.create(createCompanyDto);
  }

  async getAllCompany(): Promise<Company[]> {
    return this.companyModel.findAll();
  }
  async findOne(id: number) {
    const user = await this.companyModel.findByPk(id);
    return user;
  }

  async updateCompany(
    id: number,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company | null> {
    const updatedCompanyy = await this.companyModel.update(updateCompanyDto, {
      where: { id },
      returning: true,
    });
    return updatedCompanyy[1][0];
  }

  async deleteCompany(id: number) {
    const deletedCompany = await this.companyModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }

  async getByName(name: string) {
    const getName = await this.companyModel.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    console.log(getName);

    return getName;
  }
}
