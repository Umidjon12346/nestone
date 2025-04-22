import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Building } from './models/building.model';

@Injectable()
export class BuildingsService {
  constructor(@InjectModel(Building) private buildingsModel: typeof Building){}

  create(createBuildingDto: CreateBuildingDto) {
    return this.buildingsModel.create(createBuildingDto);
  }

  findAll() {
    return this.buildingsModel.findAll();
  }

  findOne(id: number) {
    return this.buildingsModel.findByPk(id);
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return this.buildingsModel.update(updateBuildingDto,{where:{id}});
  }

  async remove(id: number) {
    const deletedCompany = await this.buildingsModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
