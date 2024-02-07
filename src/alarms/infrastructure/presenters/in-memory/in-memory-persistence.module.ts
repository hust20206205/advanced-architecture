import { Module } from '@nestjs/common';
import { AlarmRepository } from 'src/alarms/application/ports/alarms.repository';
import { InMemoryAlarmRepository } from './repositories/alarms.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: AlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class OrmAlarmPersistenceModule {}
