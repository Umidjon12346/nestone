import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { MachineDriver } from "../../machine_driver/models/machine_driver.model";

interface IDriverCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  driver_license: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, IDriverCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  driver_license: string;

  @BelongsToMany(()=>Machine,()=>MachineDriver)
      machines:Machine[]
}
