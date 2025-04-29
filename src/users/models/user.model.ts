import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { UserRole } from "./user-role.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUSerCreationAttr {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUSerCreationAttr> {
  @ApiProperty({
    example: "User1",
    description: "user ismi",
  })
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
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
