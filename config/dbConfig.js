module.exports = {
    HOST: 'localhost',
    USER: 'root',
    DB: 'the-all',
    dialect: 'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        adle: 10000
    }
}