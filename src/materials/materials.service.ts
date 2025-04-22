import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Material } from './models/material.model';

@Injectable()
export class MaterialsService {
  constructor(@InjectModel(Material) private materialModel: typeof Material){}
  create(createMaterialDto: CreateMaterialDto) {
    return this.materialModel.create(createMaterialDto);
  }

  findAll() {
    return this.materialModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.materialModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return this.materialModel.update(updateMaterialDto,{where:{id}});
  }

  async remove(id: number) {
    const deletedCompany = await this.materialModel.destroy({
      where: { id },
    });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
