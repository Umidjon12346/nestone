import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { BuildingMaterial } from "../../building_materials/models/building_material.model";
import { Building } from "../../buildings/models/building.model";

interface IMaterialCreationAttr {
  name: string;
  unit: string;
  peice_per_unit: number;
}

@Table({ tableName: "materials" })
export class Material extends Model<Material, IMaterialCreationAttr> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  unit: string;

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  peice_per_unit: number;

  @BelongsToMany(() => Building, () => BuildingMaterial)
  building: Building[];
}
