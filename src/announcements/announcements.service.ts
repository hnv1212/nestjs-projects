import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { QueueName } from 'src/queue.interface';

@Injectable()
export class AnnouncementsService {
  constructor(@InjectQueue(QueueName.email) private emailQueue: Queue) {}

  async create() {
    const job = await this.emailQueue.add({ data: 'dd' }, { delay: 3000 });
    console.log('🚀 ~ AnnouncementsService ~ create ~ job:', { ...job });
  }
}
