import { Controller, Post, Body, HttpCode, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Auth } from './decorators/auth.decorator';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { UserRequest } from 'src/shared/interfaces/user-request.interface';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('check-token')
  @Auth(
    ValidRoles.admin,
    ValidRoles.agency,
    ValidRoles.owner,
    ValidRoles.tenant,
  )
  checkToken(@Request() req: UserRequest) {
    return this.authService.checkToken(req.user);
  }
}
