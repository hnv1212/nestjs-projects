import { MakePaymentDto } from '@app/shared/dto';
import { User } from '@app/shared/entities';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

/**
 * Inject the Kafka client for publishing events to the auth-microservice app. When you emit the get_user event, you'll need to listen for the response from the auth microservice; this is different from what you did for the create_user event.
 *
 * With Kafka communication, an event's response is returned in a reply event that NestJS handles out of the box.
 * Nest automatically sends the reply back in a new event that ends with a .reply keyword.
 * This type of communication between microservices is known as the request-response pattern.
 *
 * To configure this communication in the PaymentMicroserviceService, you'll need to implement the onModuleInit interface and use the onModuleInit() lifecycle method to subscribe to the response of the get_user event using the subscribeToResponseOf() method.
 * You don't have to manually add any handlers for the get_user.reply event since Nest takes care of that.
 */

@Injectable()
export class PaymentMicroserviceService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
  ) {}

  processPayment(makePaymentDto: MakePaymentDto) {
    const { userId, amount } = makePaymentDto;
    console.log('process payment');
    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.log(
          `process payment for user ${user.name} - amount: ${amount}`,
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}

/**
 * Instead of using the emit() method to publish the get_user event, use the send() method. The send() method enables you to use a callback to subscribe to the reply of an event.
 */