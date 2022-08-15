import { registerAs } from '@nestjs/config';

const databaseConfigAlias = registerAs('db', () => ({
  name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}));

export default databaseConfigAlias;
