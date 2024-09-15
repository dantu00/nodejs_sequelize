import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '@/models'

export const connect = () => {
    const hostName = process.env.HOST || "localhost";
    const userName = process.env.USER_NAME || "root";
    const password = process.env.PASSWORD || "";
    const database = process.env.DB || "sequelize_test";
    const dialect: any = process.env.DIALECT;

    const operatorsAliases: any = false;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        // repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    sequelize.addModels([UserModel]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;
}