import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "../../builders/models/builder.model";
import { Employee } from "../../employees/models/employee.model";
import { Machine } from "../../machine/models/machine.model";

interface CompanyCreationAttr {
  name: string;
  phone: string;
  email: string;
  address: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @HasMany(() => Builder)
  builders: Builder[];

  @HasMany(() => Machine)
  machine: Machine[];

  @HasMany(() => Employee)
  employees: Employee[];
}
