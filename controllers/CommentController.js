const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Commentaire = db.comments;
const Visiteur = db.visiteurs;


// Add commantaire
const addCommentaire = async(req , res) => {
    const data = {};
    Visiteur.create({
        name: req.body.name,
        email: req.body.email
    }).then(e=>{
        data.visiteur = e;
        Commentaire.create({
            commentaire: req.body.commentaire,
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
    addCommentaire,
    getAllComment,
    getoneComment,
    updateComment,
    deleteComment,
}


// const addCommentaire = async(req , res) => {
//     const data = {};
//     Visiteur.findAll({where :{email: req.body.email}})
//     .then(e => {
//         data.visiteur = e;
//         if(e.length != 0){
//             Commentaire.create({
//                 commentaire: req.body.commentaire,
//                 articleId: req.body.articleId,
//                 visiteurId: data.visiteur.id
//             })
//             .then(()=>{
//                 res.redirect('/The-all/'+req.body.articleId);
//             })
//         }else{
//             Visiteur.create({
//                 name: req.body.name,
//                 email: req.body.email
//             }).then(e=>{
//                 data.visiteur = e;
//                 Commentaire.create({
//                     commentaire: req.body.commentaire,
//                     articleId: req.body.articleId,
//                     visiteurId: data.visiteur.id
//                 })
//                 .then(()=>{
//                     res.redirect('/The-all/'+req.body.articleId);
//                 })
//             }).catch(()=>{
//                 res.json({Error:'Error'});
//             })
//         }
//     })
// }