import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from '../presenters/http/dto/create-alarm.dto';
import { UpdateAlarmDto } from '../presenters/http/dto/update-alarm.dto';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { AlarmRepository } from './ports/alarms.repository';
import { AlarmFactory } from '../domain/factories/alarm.factory';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly AlarmRepository: AlarmRepository,
    private readonly AlarmFactory: AlarmFactory,
  ) {}
  create(createAlarmCommand: CreateAlarmCommand) {
    const alarm = this.AlarmFactory.create(
      createAlarmCommand.name,
      createAlarmCommand.severity,
    );
    return this.AlarmRepository.save(alarm);
  }

  findAll() {
    return this.AlarmRepository.findAll();
  }
}
