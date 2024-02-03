import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { QueueName } from 'src/queue.interface';
import { AnnouncementConsumer } from './announcements.consumer';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: QueueName.email,
      },
      {
        name: QueueName.audio,
      },
    ),
  ],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService, AnnouncementConsumer],
})
export class AnnouncementsModule {}
