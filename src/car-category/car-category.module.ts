import { Module } from '@nestjs/common';
import { CarCategoryService } from './car-category.service';
import { CarCategoryController } from './car-category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarCategory } from './models/car-category.model';

@Module({
  imports:[SequelizeModule.forFeature([CarCategory])],
  controllers: [CarCategoryController],
  providers: [CarCategoryService],
})
export class CarCategoryModule {}
