import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['POSTGRES_HOST'] || 'localhost',
      port: parseInt(process.env['POSTGRES_PORT'] || '5432', 10),
      username: process.env['POSTGRES_USER'] || 'postgres',
      password: process.env['POSTGRES_PASSWORD'] || 'postgres',
      database: process.env['POSTGRES_DB'] || 'baseDb',
      synchronize: !!JSON.parse(process.env['TYPEORM_SYNCHRONIZE'] || 'true'),
      entities: [__dirname + '/dist/**/*.entity.js'],
      autoLoadEntities: true,
      // migrations: [__dirname + "/dist/migration/**/*.js"],
      // subscribers: [__dirname + "dist/subscriber/**/*.js"],
      // cli: {
      //   entitiesDir: "src/**/*.entity{.ts,.js}",
      //   migrationsDir: "src/migration",
      //   subscribersDir: "src/subscriber",
      // },
    }),
  ],
})
export class DatabaseModule {}
