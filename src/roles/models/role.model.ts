import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "src/users/models/user.model";
import { UserRole } from "src/users/models/user-role.model";

interface IRolesCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
