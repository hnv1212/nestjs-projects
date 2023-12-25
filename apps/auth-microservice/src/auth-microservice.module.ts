import { Module } from '@nestjs/common';
import { AuthMicroserviceController } from './auth-microservice.controller';
import { AuthMicroserviceService } from './auth-microservice.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [],
  controllers: [AuthMicroserviceController],
  providers: [AuthMicroserviceService, UsersRepository],
})
export class AuthMicroserviceModule {}
