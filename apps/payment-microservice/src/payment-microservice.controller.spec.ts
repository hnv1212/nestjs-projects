import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMicroserviceController } from './payment-microservice.controller';
import { PaymentMicroserviceService } from './payment-microservice.service';

describe('PaymentMicroserviceController', () => {
  let paymentMicroserviceController: PaymentMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMicroserviceController],
      providers: [PaymentMicroserviceService],
    }).compile();

    paymentMicroserviceController = app.get<PaymentMicroserviceController>(PaymentMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
