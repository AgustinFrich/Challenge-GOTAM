import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DB_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      });

      return dataSource.initialize();
    },
  },
];
