import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Building } from "src/buildings/models/building.model";
import { Employee } from "src/employees/models/employee.model";

interface IBuildingEmployeeCreationAttr {
  buildingId: number;
  employeeId: number;
  role: string;
  assigned_at: Date;
}

@Table({ tableName: "building_employees" })
export class BuildingEmployee extends Model<
  BuildingEmployee,
  IBuildingEmployeeCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Building)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  buildingId: number;

  @BelongsTo(() => Building)
  buildings: Building;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employeeId: number;

  @BelongsTo(() => Employee)
  employees: Employee;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  assigned_at: Date;
}
