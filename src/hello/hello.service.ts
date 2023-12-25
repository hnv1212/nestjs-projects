import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class HelloService {
  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: any): { message: string } {
    return { message: 'hello world' };
  }
}
