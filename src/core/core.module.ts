import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from 'src/common/interfaces/application-bootstrap-option.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver == 'orm'
        ? [
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'nghia',
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              autoLoadEntities: true,
              synchronize: true,
              logging: true,
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
