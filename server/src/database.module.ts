import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME') + (process.env.NODE_ENV === 'test' ? '_test' : ''),
        entities: ['dist/**/*.entity.{ts,js}'],
        synchronize: configService.get('DEBUG') === 'true',
      })
    }),
  ],
})
export class DatabaseModule {}