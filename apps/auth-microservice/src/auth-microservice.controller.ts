import { Controller, Get, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { AuthMicroserviceService } from './auth-microservice.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@app/shared/dto';

@Controller()
export class AuthMicroserviceController {
  constructor(
    private readonly authMicroserviceService: AuthMicroserviceService,
  ) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.authMicroserviceService.createUser(data);
  }

  // For the request-response messaging pattern, you’ll need to use the @MessagePattern() decorator to consume the event:
  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.authMicroserviceService.getUser(userId);
  }
}
