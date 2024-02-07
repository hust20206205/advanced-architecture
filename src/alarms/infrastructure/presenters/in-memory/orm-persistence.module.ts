import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmRepository } from "src/alarms/application/ports/alarms.repository";
import { AlarmEntity } from "./entities/alarm.entity";
import { InMemoryAlarmRepository } from "./repositories/alarms.repository";

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity])],
  providers: [{
    provide: AlarmRepository,
    useClass: InMemoryAlarmRepository
  }],exports: [AlarmRepository]
})
export class OrmAlarmPersistenceModule {}