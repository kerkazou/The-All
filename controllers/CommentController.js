const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Commentaire = db.comments;

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
        const {id} = req.body;
        const {body} = req;
        Commentaire.update({...body}, {where: {
            id:id
        }})
        .then(()=>
            {res.redirect('/commentaires')}
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
    getAllComment,
    getoneComment,
    updateComment,
    deleteComment
}