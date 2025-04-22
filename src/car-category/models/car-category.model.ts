import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICarCategoryCreationAttr {
  name: string;
  description: string;
  seat_count: number;
  luggage_capacity: number;
  doors_count: number;
  is_automatic: boolean;
  daily_price: number;
  image_url: string;
}

@Table({ tableName: "car_categories", timestamps: false })
export class CarCategory extends Model<CarCategory, ICarCategoryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  seat_count: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  luggage_capacity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  doors_count: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_automatic: boolean;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: true,
  })
  daily_price: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  image_url: string;
}
