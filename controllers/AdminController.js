const { where } = require('sequelize');
const db = require('../models');

// Create Main Model
const Admin = db.admins;

// Get One Articles
const getoneAdmin = async(req , res) => {
    let {password} = req.params;
    Admin.findAll({
        where:{password:password}
    })
    .then(admin=>
        {res.send(true)})
    .catch(()=>
        {res.send('Error')}
    );
}

// Update Articles
const updateAdmin = async(req , res) => {
    let {id} = req.params;
    const {body} = req;
    Admin.update({...body}, {where: {
        id:id
    }})
    .then(()=>
        {res.send('Success')}
    )
    .catch(()=>
        {res.send('Error')}
    );
}


module.exports = {
    getoneAdmin,
    updateAdmin
}