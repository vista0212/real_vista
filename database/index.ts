import * as dotenv from 'dotenv';

import { Sequelize } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
});

export async function connect(force: boolean, logging?: boolean) {
  try {
    await sequelize.sync({ force, logging });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}