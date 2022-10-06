const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Commentaire = db.comments;


// Add commantaire
const addCommentaire = async(req , res) => {
    const {body} = req;
    Commentaire.create({...body})
    .then(()=>{
        res.json({Success:'commentaire is added'});
    }).catch(()=>{
        res.json({Error:'commentaire is not added'});
    })
}


// Get All Comments
    const getAllComment = async(req , res) => {
        Commentaire.findAll()
        .then(getAllComment=>
            {res.render('commentaires', {getAllComment})}
        )
        .catch(()=>
            {res.send('Error')}
        );
    }
    
// Get All Comment
    const getoneComment = async(req , res) => {
        let {id} = req.params;
        Commentaire.findByPk(id)
        .then(getoneComment=>
            {res.json({getoneComment}
        )})
        .catch(()=>
            {res.send('Error')}
        );
    }

// Update Comment
    const updateComment = async(req , res) => {
        let {id} = req.params;
        const {body} = req;
        Commentaire.update({...body}, {where: {
            id:id
        }})
        .then(()=>
            {res.send('Success')}
        )
        .catch(()=>
            {res.send('Error')}
        );
    }

// Delete Comment
    const deleteComment = async(req , res) => {
        let {id} = req.body;
        Commentaire.destroy({where: {
            id:id
        }})
        .then(()=>
            {res.redirect('/commentaires')}
        )
        .catch(()=>
            {res.send('Error')}
        );
    }




module.exports = {
    addCommentaire,
    getAllComment,
    getoneComment,
    updateComment,
    deleteComment,
    // countArticle
}