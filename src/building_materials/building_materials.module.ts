import { Module } from '@nestjs/common';
import { BuildingMaterialsService } from './building_materials.service';
import { BuildingMaterialsController } from './building_materials.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BuildingMaterial } from './models/building_material.model';

@Module({
  imports:[SequelizeModule.forFeature([BuildingMaterial])],
  controllers: [BuildingMaterialsController],
  providers: [BuildingMaterialsService],
})
export class BuildingMaterialsModule {}
