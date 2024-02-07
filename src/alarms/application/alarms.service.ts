import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from '../presenters/http/dto/create-alarm.dto';
import { UpdateAlarmDto } from '../presenters/http/dto/update-alarm.dto';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { AlarmRepository } from './ports/alarms.repository';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class AlarmsService {
  // export class AlarmsService {
  constructor(
    private readonly AlarmRepository: AlarmRepository,
    private readonly commandBus: CommandBus,
  ) {}
  create(createAlarmCommand: CreateAlarmCommand) {
    return this.commandBus.execute(createAlarmCommand);
  }

  findAll() {
    return this.AlarmRepository.findAll();
  }
}
