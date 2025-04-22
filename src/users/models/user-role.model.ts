import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "src/roles/models/role.model";

interface IUserRoleCreationAttr {
  userId:number
  roleId:number
}

@Table({ tableName: "user-roles" })
export class UserRole extends Model<UserRole, IUserRoleCreationAttr> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
}
