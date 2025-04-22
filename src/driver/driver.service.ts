import { Injectable } from "@nestjs/common";
import { CreateDriverDto } from "./dto/create-driver.dto";
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Driver } from "./models/driver.model";

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverModel: typeof Driver) {}

  create(createDriverDto: CreateDriverDto) {
    return this.driverModel.create(createDriverDto);
  }

  findAll() {
    return this.driverModel.findAll();
  }

  findOne(id: number) {
    return this.driverModel.findByPk(id);
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.driverModel.update(updateDriverDto, { where: { id } });
  }

  async remove(id: number) {
    const deletedCompany = await this.driverModel.destroy({ where: { id } });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
}
