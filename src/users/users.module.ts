import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { UserRole } from "./models/user-role.model";
import { Role } from "../roles/models/role.model";
import { RolesModule } from "../roles/roles.module";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRole, Role]),
    RolesModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: process.env.SECRET_TIME },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
