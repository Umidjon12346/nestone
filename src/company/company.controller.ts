import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompany } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompany
  ): Promise<Company> {
    console.log(createCompanyDto);
    return this.companyService.createCompany(createCompanyDto);
  }
  @Get()
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }
  @Get(":id")
  async getByIdCompany(@Param("id") id: number): Promise<Company | null> {
    return this.companyService.getByIdCompany(+id)
  }
  @Patch(":id")
  async updateCompany(@Param("id") id:string,@Body() updateCompanyDto: UpdateCompanyDto): Promise<Company | null>{
      return this.companyService.updateCompany(+id,updateCompanyDto)
    }

    @Delete(":id")
    async deleteCompany(@Param("id") id:string){
        return this.companyService.deleteCompany(+id)
    }

    @Get("name/:name")
    async getByName(@Param("name") name:string){
        return this.companyService.getByName(name)
    }
}
