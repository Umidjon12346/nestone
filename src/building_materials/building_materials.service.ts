import { Injectable } from '@nestjs/common';
import { CreateBuildingMaterialDto } from './dto/create-building_material.dto';
import { UpdateBuildingMaterialDto } from './dto/update-building_material.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingMaterial } from './models/building_material.model';

@Injectable()
export class BuildingMaterialsService {
  constructor(@InjectModel(BuildingMaterial) private buildingMaterialModel: typeof BuildingMaterial){}

  create(createBuildingMaterialDto: CreateBuildingMaterialDto) {
    return this.buildingMaterialModel.create(createBuildingMaterialDto);
  }

  findAll() {
    return this.buildingMaterialModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.buildingMaterialModel.findByPk(id,{include:{all:true}});
  }

  update(id: number, updateBuildingMaterialDto: UpdateBuildingMaterialDto) {
    return this.buildingMaterialModel.update(updateBuildingMaterialDto,{where:{id}});
  }

  async remove(id: number) {
     const deletedCompany = await this.buildingMaterialModel.destroy({
       where: { id },
     });
     if (deletedCompany > 0) {
       return "tuiopsuadoaihfjadhfsafasuf";
     }
     return "yoqwdsfas";
  }
}
