import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Building } from "src/buildings/models/building.model";
import { Material } from "src/materials/models/material.model";

interface IBuildingMaterialCreationAttr {
  buildingId: number;
  materialId: number;
  quantity: number;
  delivered_at: Date;
}

@Table({ tableName: "building_materials" })
export class BuildingMaterial extends Model<
  BuildingMaterial,
  IBuildingMaterialCreationAttr
> {
  @ForeignKey(() => Building)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  buildingId: number;

  @BelongsTo(()=>Building)
  buildings:Building

  @ForeignKey(() => Material)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  materialId: number;

  @BelongsTo(()=>Material)
  material:Material

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  delivered_at!: Date;
}
