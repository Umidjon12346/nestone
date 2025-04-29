import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/models/role.model";
import { ActivateUserDto } from "./dto/activateuser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findByValue(createUserDto.value);
    if (!role) {
      throw new NotFoundException("bunday role u[pafbj");
    }
    // await newUser.$set("roles", [role.id]);
    // newUser.roles = [role];
    // await newUser.save();
    return newUser;
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
    return user?.dataValues;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const deletedCompany = await this.userModel.destroy({
      where: { id },
    });
    if (deletedCompany > 0) {
      return "tuiopsuadoaihfjadhfsafasuf";
    }
    return "yoqwdsfas";
  }
  

  async addRole(addRoleDto ) {
    const user = await this.findOne(addRoleDto.userId);
    const role = await this.roleService.findByValue(addRoleDto.value);

    if (!role) {
      throw new NotFoundException("Yo'q role");
    }
    if (!user) {
      throw new NotFoundException("Yo'q odam");
    }
    await user.$add("roles", role.id);
    return "endi Role bor";
  }

  async remuveRole(addRoleDto ) {
    const user = await this.findOne(addRoleDto.userId);
    const role = await this.roleService.findByValue(addRoleDto.value);

    if (!role) {
      throw new NotFoundException("Yo'q role");
    }
    if (!user) {
      throw new NotFoundException("Yo'q odam");
    }
    await user.$remove("roles", role.id);
    return "endi Role yo'q";
  }

  async activateUser(activateUserDto:ActivateUserDto){
    const user = this.findOne(activateUserDto.userId);
    
  }
}
