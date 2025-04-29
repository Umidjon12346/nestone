import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { User } from "../users/models/user.model";
import { emitWarning } from "process";
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

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

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
      is_active: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    

    if (!user) {
      throw new UnauthorizedException("email yoki pass hato");
    }
    const validPass = bcrypt.compareSync(signInDto.password, user.password);
    if (!validPass) {
      throw new UnauthorizedException("email yoki pass hato");
    }
    
    
    return this.generateToken(user);
  }
}
