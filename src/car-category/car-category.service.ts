import { Injectable } from '@nestjs/common';
import { CreateCarCategoryDto } from './dto/create-car-category.dto';
import { UpdateCarCategoryDto } from './dto/update-car-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CarCategory } from './models/car-category.model';

@Injectable()
export class CarCategoryService {
  constructor(@InjectModel(CarCategory) private carCategoryModel: typeof CarCategory){}

  create(createCarCategoryDto: CreateCarCategoryDto) {
    return this.carCategoryModel.create(createCarCategoryDto);
  }

  findAll() {
    return this.carCategoryModel.findAll();
  }

  findOne(id: number) {
    return this.carCategoryModel.findByPk(id);
  }

  update(id: number, updateCarCategoryDto: UpdateCarCategoryDto) {
    return this.carCategoryModel.update(updateCarCategoryDto,{where:{id}});
  }

  async remove(id: number) {
        const deletedCompany = await this.carCategoryModel.destroy({
          where: { id },
        });
        if (deletedCompany > 0) {
          return "tuiopsuadoaihfjadhfsafasuf";
        }
        return "yoqwdsfas";
  }
}
