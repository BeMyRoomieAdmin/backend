import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // @Get('check-token')
  // @Auth(
  //   ValidRoles.admin,
  //   ValidRoles.company,
  //   ValidRoles.driver,
  //   ValidRoles.user,
  // )
  // checkToken(@Request() req: Request) {
  //   return this.authService.checkToken(req['user']);
  // }
}
