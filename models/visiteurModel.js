module.exports = (sequelize, DataTypes) => {
    const Visiteur = sequelize.define("visiteur", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Visiteur;
}