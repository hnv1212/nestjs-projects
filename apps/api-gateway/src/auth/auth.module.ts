import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

/**
 * The ClientsModule exposes a static register() method that takes an array of objects describing microservice transporters as an argument.
 * Each transporter object has a name property, a transporter property, which in this case is Transport.KAFKA, and a transporter-specific options property.
 * The name property defines the injection token, which you can use later in your service class to publish events
 * 
 * Since the transport is Kafka, the options property will define the Kafka client object, which includes the clientId, brokers, and a consumers with the same groupId can only read the published events.
 */

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_MICROSERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'auth',
                        brokers: ['localhost:9092']
                    },
                    producerOnlyMode: true,
                    consumer: {
                        groupId: 'auth-consumer'
                    }
                }
            }
        ])
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
