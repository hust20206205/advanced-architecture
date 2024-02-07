import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/alarms.module';

@Module({
  imports: [AlarmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
