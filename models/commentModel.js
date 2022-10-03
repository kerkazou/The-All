module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define("commentaire", {
        visiteur: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        article: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Commentaire;
}