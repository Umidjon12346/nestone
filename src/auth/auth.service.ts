import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signup(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findByEmail(createUserDto.email);
    if (condidate) {
      throw new BadRequestException("bunday emailli foydalanuvchi bor");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);

    return newUser;
  }
}
