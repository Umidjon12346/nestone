import { Injectable } from "@nestjs/common";
import { CreateMachineDriverDto } from "./dto/create-machine_driver.dto";
import { UpdateMachineDriverDto } from "./dto/update-machine_driver.dto";
import { InjectModel } from "@nestjs/sequelize";
import { MachineDriver } from "./models/machine_driver.model";

@Injectable()
export class MachineDriverService {
  constructor(
    @InjectModel(MachineDriver) private machineDriverModel: typeof MachineDriver
  ) {}
  create(createMachineDriverDto: CreateMachineDriverDto) {
    return this.machineDriverModel.create(createMachineDriverDto);
  }

  findAll() {
    return this.machineDriverModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.machineDriverModel.findByPk(id,{include:{all:true}});
  }

  update(id: number, updateMachineDriverDto: UpdateMachineDriverDto) {
    return this.machineDriverModel.update(updateMachineDriverDto,{where:{id}});
  }

  async remove(id: number) {
   const deletedCompany = await this.machineDriverModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  };
  }

