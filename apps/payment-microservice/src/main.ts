import { NestFactory } from '@nestjs/core';
import { PaymentMicroserviceModule } from './payment-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentMicroserviceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'payment-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
