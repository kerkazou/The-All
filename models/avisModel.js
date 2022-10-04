module.exports = (sequelize, DataTypes) => {
    const Avis = sequelize.define("avis", {
        avis: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Avis;
}