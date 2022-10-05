const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routers
const article = require('./routes/articleRouter.js');
app.use('/articles', article);
const admin = require('./routes/adminRouter.js');
app.use('/admins', admin);
const avis = require('./routes/avisRouter.js');
app.use('/avis', avis);




// Port
const PORT = 5000;
app.listen(PORT, () => console.log('Server running on http://localhost:${port}'));