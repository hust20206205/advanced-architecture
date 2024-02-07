import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAlarmCommand } from './create-alarm.command';
import { Logger } from '@nestjs/common';
import { AlarmFactory } from '../../domain/factories/alarm.factory';
import { AlarmRepository } from '../ports/alarms.repository';

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler
  implements ICommandHandler<CreateAlarmCommand>
{
  private readonly logger = new Logger(CreateAlarmCommandHandler.name);

  constructor(
    private readonly AlarmRepository: AlarmRepository,
    private readonly AlarmFactory: AlarmFactory,
  ) {}
  async execute(command: CreateAlarmCommand) {
    this.logger.debug(
      `Processing  "CreateAlarmCommand": ${JSON.stringify(command)}`,
    );

    const alarm = this.AlarmFactory.create(command.name, command.severity);
    return this.AlarmRepository.save(alarm);
  }
}
