import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'dpg-cg73081mbg5ab7mpubeg-a',
      port: 5432,
      username: 'welcal_db_user',
      password: 'Y2rWtD9MFjsAjw1yemLOWEGeLUPJ5t1X',
      database: 'welcal_db',
      entities: ['src/**/entites/*.entity{.ts,.js}'],
      migrations: ['src/migrations/*.ts'],
      synchronize: true,
    };
  },
};
