import { OrmAlarmPersistenceModule } from './presenters/orm/orm-persistence.module';
import { InMemoryAlarmRepository } from './presenters/in-memory/repositories/alarms.repository';
import { Module } from '@nestjs/common';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'inmemory') {
    const persistenceModule =
      driver == 'orm' ? OrmAlarmPersistenceModule : InMemoryAlarmRepository;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
