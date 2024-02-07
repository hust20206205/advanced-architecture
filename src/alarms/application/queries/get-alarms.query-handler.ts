import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAlarmsQuery } from './get-alarms.query';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from '../ports/alarms.repository';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}
  async execute(query: GetAlarmsQuery): Promise<Alarm[]> {
    return this.alarmRepository.findAll()
  }
}
