import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'host.docker.internal',
        port: 1025,
      },
      defaults: {
        from: 'no-reply@example.com',
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
