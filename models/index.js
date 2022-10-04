const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..');
})
.catch(err => {
    console.log('Error'+ err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require('./adminModel.js')(sequelize, DataTypes);
db.articles = require('./articleModel.js')(sequelize, DataTypes);
db.avis = require('./avisModel.js')(sequelize, DataTypes);
db.categorys = require('./categoryModel.js')(sequelize, DataTypes);
db.comments = require('./commentModel.js')(sequelize, DataTypes);
db.visiteurs = require('./visiteurModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Yes re-senc done!');
})

db.articles.hasMany(db.comments);
db.visiteurs.hasMany(db.comments);
db.articles.hasMany(db.avis);
db.visiteurs.hasMany(db.avis);

module.exports = db;