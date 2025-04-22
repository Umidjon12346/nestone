import { Injectable } from '@nestjs/common';
import { CreateBuildingEmployeeDto } from './dto/create-building_employee.dto';
import { UpdateBuildingEmployeeDto } from './dto/update-building_employee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingEmployee } from './models/building_employee.model';

@Injectable()
export class BuildingEmployeesService {
  constructor(@InjectModel(BuildingEmployee) private buildingEmployee:typeof BuildingEmployee){}

  create(createBuildingEmployeeDto: CreateBuildingEmployeeDto) {
    return this.buildingEmployee.create(createBuildingEmployeeDto);
  }

  findAll() {
    return this.buildingEmployee.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.buildingEmployee.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateBuildingEmployeeDto: UpdateBuildingEmployeeDto) {
    return this.buildingEmployee.update(updateBuildingEmployeeDto,{where:{id}});
  }

  async remove(id: number) {
    const deletedCompany = await this.buildingEmployee.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
