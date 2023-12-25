import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { PaymentMicroserviceService } from './payment-microservice.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MakePaymentDto } from '@app/shared/dto';

@Controller()
export class PaymentMicroserviceController {
  constructor(
    private readonly paymentMicroserviceService: PaymentMicroserviceService,
  ) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDto) {
    this.paymentMicroserviceService.processPayment(data);
  }
}
