const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Avis = db.avis;
const Visiteur = db.visiteurs;


// Add Like Avis
const addLikeAvis = async(req , res) => {
    const data = {};
    Visiteur.create({
        name: req.body.name,
        email: req.body.email
    }).then(e=>{
        data.visiteur = e;
        Avis.create({
            avis: 'like',
            articleId: req.body.articleId,
            visiteurId: data.visiteur.id
        })
        .then(()=>{
            res.redirect('/The-all/'+req.body.articleId);
        })
    }).catch(()=>{
        res.json({Error:'Error'});
    })
}

// Add Dislike Avis
const addDislikeAvis = async(req , res) => {
    const data = {};
    Visiteur.create({
        name: req.body.name,
        email: req.body.email
    }).then(e=>{
        data.visiteur = e;
        Avis.create({
            avis: 'dislike',
            articleId: req.body.articleId,
            visiteurId: data.visiteur.id
        })
        .then(()=>{
            res.redirect('/The-all/'+req.body.articleId);
        })
    }).catch(()=>{
        res.json({Error:'Error'});
    })
}

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


module.exports = {
    addLikeAvis,
    addDislikeAvis,
    getAllAvis,
    deleteAvis
}