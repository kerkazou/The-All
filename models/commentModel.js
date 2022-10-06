module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define("commentaire", {
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // visiteurId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // articleId : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
     
    })
    return Commentaire;
}
