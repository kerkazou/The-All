module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Article;
}