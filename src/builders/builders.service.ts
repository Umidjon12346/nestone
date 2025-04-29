import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.model";
import { InjectModel } from "@nestjs/sequelize";
import { CompanyService } from "../company/company.service";

@Injectable()
export class BuildersService {
  constructor(
    @InjectModel(Builder) private builderModel: typeof Builder,
    private readonly companyService: CompanyService
  ) {}

  async create(createBuilderDto: CreateBuilderDto) {  
    const {companyId} = createBuilderDto
    const company = await this.companyService.getByIdCompany(companyId)
    if(!company){
      throw new BadRequestException("bunday companiya yoq")
    }
    return this.builderModel.create(createBuilderDto);
  }

  findAll() {
    return this.builderModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.builderModel.findByPk(id);
  }

  update(id: number, updateBuilderDto: UpdateBuilderDto) {
    return this.builderModel.update(updateBuilderDto,{where:{id}});
  }

  async remove(id: number) {
    const deletedCompany = await this.builderModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
