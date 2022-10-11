module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define("commentaire", {
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Commentaire;
}
