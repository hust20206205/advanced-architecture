import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/alarms.module';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrastructure.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-option.interface';
import { CoreModule } from './core/core.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot(), CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastructure(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
