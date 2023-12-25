import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payment-microservice.controller';
import { PaymentMicroserviceService } from './payment-microservice.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [PaymentMicroserviceController],
  providers: [PaymentMicroserviceService],
})
export class PaymentMicroserviceModule {}
