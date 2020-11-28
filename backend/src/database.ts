import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:cG66uW^7u#h@localhost:3306/pitu');
//const sequelize = new Sequelize('postgres://sa:PoliSystemsapwd@127.0.0.1:5432/pitu');

export default sequelize;