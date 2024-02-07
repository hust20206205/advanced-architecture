import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmsService } from './application/alarms.service';
import { AlarmsController } from './presenters/http/alarms.controller';
import { AlarmFactory } from './domain/factories/alarm.factory';
import { CoreModule } from './core/core.module';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService, AlarmFactory],
  imports: [CoreModule],
})
export class AlarmsModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule],
    };
  }
}
