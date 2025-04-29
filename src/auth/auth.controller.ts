import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signUp(@Body() createUserDto:CreateUserDto){
    return this.authService.signup(createUserDto)
  }
  @Post("signin")
  signIn(@Body() signInDto:SignInDto){
    return this.authService.signIn(signInDto)
  }
}
