import { Sequelize } from 'sequelize-typescript';

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
} = process.env;

export const sequelize = new Sequelize({
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    // BEWARE: Database should exist
    // TODO: Add migration
    database: DB_NAME,
    dialect: 'postgres',
    modelPaths: [__dirname + '/models'],
});
