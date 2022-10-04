module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Category;
}