import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { BuildingEmployee } from "src/building_employees/models/building_employee.model";
import { BuildingMaterial } from "src/building_materials/models/building_material.model";
import { Employee } from "src/employees/models/employee.model";
import { Material } from "src/materials/models/material.model";

interface IBuildingCreationAttr {
  name: string;
  address: string;
  started_at: Date;
  finished_at: Date;
}

@Table({ tableName: "buildings" })
export class Building extends Model<Building, IBuildingCreationAttr> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  started_at: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  finished_at: Date;

  @BelongsToMany(() => Employee, () => BuildingEmployee)
  employees: Employee[];

  @BelongsToMany(() => Material, () => BuildingMaterial)
  material: Material[];
}
