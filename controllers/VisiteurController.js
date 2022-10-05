const { json } = require('body-parser');
const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Visiteur = db.visiteurs;

// Get All Visiteur
const getAllVisiteur = async(req , res) => {
    Visiteur.findAll()
    .then( getallvisiteurs=> {
        res.render('Visiteurs', {getallvisiteurs})
    })
    .catch(()=>
        {res.json({error: 'Error'})}
    );
}

// Count Visiteur
const countVisiteur = async(req , res) => {
    Visiteur.count()
    .then(visiteur=>
        {res.json({visiteur}
    )})
    .catch(()=>
        {res.json({error: 'Error'})}
    );
}


module.exports = {
    getAllVisiteur,
    countVisiteur
}