const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Profil = db.admins;

// Get Profil
const getProfil = async (req, res) => {
    Profil.findByPk('1')
        .then(getprofil => {
            res.render('profil', { getprofil })
        })
        .catch(() => { res.send('Error') }
        )
}

// Update Profil
const updateProfil = async(req , res) => {
    const {id} = req.body;
    const {body} = req;
    Profil.update({...body}, {where: {
        id:id
    }})
    .then(()=>
    res.redirect('/profil')
    )
    .catch(()=>
        {res.send('Error')}
    );
}


module.exports = {
    getProfil,
    updateProfil
}