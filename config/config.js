require('dotenv').config();

module.exports = {
    devlopment : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_PASSWORD,
        dialect : process.env.DIALECT
    },
    production : {
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_PASSWORD,
        dialect : process.env.DIALECT,
        logging : false
    }
}