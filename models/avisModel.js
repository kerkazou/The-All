module.exports = (sequelize, DataTypes) => {
    const Avis = sequelize.define("avis", {
        visiteur: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        article: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        avis: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Avis;
}