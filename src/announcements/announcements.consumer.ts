import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { QueueName } from 'src/queue.interface';

@Processor(QueueName.email)
export class AnnouncementConsumer {
  @Process()
  async handleTask(job: Job<unknown>) {
    const employees = [
      'employee-1@example.com',
      'employee-2@example.com',
      'employee-3@example.com',
    ];

    let progress = 0;

    employees.forEach(async (emp) => {
      await this.sendEmail(emp, job.data);
      progress++;
      await job.progress(progress);
    });
  }

  async sendEmail(email: string, data: Record<string, any>) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(email);
      }, 1000 * 3);
    });
  }
}
