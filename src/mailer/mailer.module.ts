import { Module } from '@nestjs/common';
import { MailerService } from './service';

const providers = [MailerService];

@Module({
  providers,
  exports: providers,
})
export class MailerModule {}
