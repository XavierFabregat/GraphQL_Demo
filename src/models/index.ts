import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('GraphQL_demo', 'xavierfabregat', '', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});


try {
  await sequelize.authenticate();
  await sequelize.sync()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};


