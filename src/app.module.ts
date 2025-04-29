import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { BuildersModule } from "./builders/builders.module";
import { Builder } from "./builders/models/builder.model";
import { MachineModule } from "./machine/machine.module";
import { Machine } from "./machine/models/machine.model";
import { DriverModule } from "./driver/driver.module";
import { Driver } from "./driver/models/driver.model";
import { MachineDriverModule } from "./machine_driver/machine_driver.module";
import { MachineDriver } from "./machine_driver/models/machine_driver.model";
import { EmployeesModule } from "./employees/employees.module";
import { Employee } from "./employees/models/employee.model";
import { BuildingsModule } from "./buildings/buildings.module";
import { Building } from "./buildings/models/building.model";
import { BuildingEmployeesModule } from "./building_employees/building_employees.module";
import { BuildingEmployee } from "./building_employees/models/building_employee.model";
import { MaterialsModule } from "./materials/materials.module";
import { Material } from "./materials/models/material.model";
import { BuildingMaterialsModule } from "./building_materials/building_materials.module";
import { BuildingMaterial } from "./building_materials/models/building_material.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { UserRole } from "./users/models/user-role.model";
import { AuthModule } from './auth/auth.module';
import { CarCategoryModule } from './car-category/car-category.module';
import { CarCategory } from "./car-category/models/car-category.model";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Company,
        Builder,
        Machine,
        Driver,
        MachineDriver,
        Employee,
        Building,
        BuildingEmployee,
        Material,
        BuildingMaterial,
        Role,
        User,
        UserRole,
        CarCategory,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    CompanyModule,
    BuildersModule,
    MachineModule,
    DriverModule,
    MachineDriverModule,
    EmployeesModule,
    BuildingsModule,
    BuildingEmployeesModule,
    MaterialsModule,
    BuildingMaterialsModule,
    RolesModule,
    UsersModule,
    AuthModule,
    CarCategoryModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
