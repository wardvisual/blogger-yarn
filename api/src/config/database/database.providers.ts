import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [`${process.cwd()}/src/**/**/*.entity{.ts, .js}`],
        synchronize: true,
      });

      //   return await dataSource.initialize();
      return dataSource.initialize();
    },
  },
];
