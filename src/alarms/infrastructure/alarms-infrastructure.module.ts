import { OrmAlarmPersistenceModule } from './presenters/orm/orm-persistence.module';
import { Module } from '@nestjs/common';
import { InMemoryPersistenceModule } from './presenters/in-memory/in-memory-persistence.module';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver == 'orm' ? OrmAlarmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
