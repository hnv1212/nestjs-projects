import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() dto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(dto);
  }

  @Post('/signup')
  signIn(@Body() dto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(dto);
  }

  @Post('test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(
      '🚀 ~ file: auth.controller.ts:23 ~ AuthController ~ test ~ req:',
      req,
    );
  }
}
