// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'pass123',
//   database: 'postgres',
//   entities: [__dirname + '/**/*.entity.ts', __dirname + '/src/**/*.entity.js'],
//   migrations: ['src/migrations/*{.ts,.js}'],
// };

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities:  [__dirname + '/**/*.entity.ts', __dirname + '/src/**/*.entity.js'],
//   logging: true,
  synchronize: true,
//   migrationsRun: false,
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsTableName: 'history',
});