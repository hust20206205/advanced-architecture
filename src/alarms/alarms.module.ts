import { Module } from '@nestjs/common';
import { AlarmsService } from './application/alarms.service';
import { AlarmsController } from './presenters/http/alarms.controller';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsModule {}
