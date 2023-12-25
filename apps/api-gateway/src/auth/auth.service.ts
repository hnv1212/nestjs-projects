import { CreateUserDto } from '@app/shared/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

/**
 * Create an instance of ClientKafka by using the @Inject() decorator, and use the AUTH_MICROSERVICE injection token specified in the name property of the Kafka transport.
 * Using the client instance, you can access the emit() method to publish the create_user event along with the payload.
 */

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    this.authClient.emit('create_user', JSON.stringify(createUserDto));
  }
}
