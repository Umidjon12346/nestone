import { Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Employee } from "./models/employee.model";

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee) private employeeModel: typeof Employee) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeModel.create(createEmployeeDto);
  }

  findAll() {
    return this.employeeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.employeeModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.update(updateEmployeeDto, { where: { id } });
  }

  async remove(id: number) {
    const deletedCompany = await this.employeeModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
