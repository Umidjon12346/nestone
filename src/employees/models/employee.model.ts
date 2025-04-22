import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { BuildingEmployee } from "src/building_employees/models/building_employee.model";
import { Building } from "src/buildings/models/building.model";
import { Company } from "src/company/models/company.model";

interface IEmployeeCreationAttr {
  full_name: string;
  position: string;
  phone: string;
  hired_at: Date;
  companyId: number;
}

@Table({ tableName: "employees" })
export class Employee extends Model<Employee, IEmployeeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
  })
  position: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.DATE,
  })
  hired_at: Date;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(() => Building, () => BuildingEmployee)
  buildings: Building[];
}
