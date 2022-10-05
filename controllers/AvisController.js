const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Avis = db.avis;

// Get All Avis
const getAllAvis = async(req , res) => {
    Avis.findAll()
    .then(getallavis=>
        {res.render('Avis',{getallavis})}
    )
    .catch(()=>
        {res.send('Error')}
    );
}

// Delete Avis
const deleteAvis = async(req , res) => {
    let {id} = req.body;
    Avis.destroy({where: {
        id:id
    }})
    .then(()=>
        {res.redirect('/avis')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}

// Count Avis
const countAvis = async(req , res) => {
    let {id} = req.params;
    Avis.count()
    .then(avis=>
        {res.json({avis}
    )})
    .catch(()=>
        {res.send('Error')}
    );
}


module.exports = {
    getAllAvis,
    deleteAvis,
    countAvis
}