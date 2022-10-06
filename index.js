const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const article = require('./routes/articleRouter.js');
app.use('/articles', article);
const admin = require('./routes/adminRouter.js');
app.use('/admins', admin);
const avis = require('./routes/avisRouter.js');
app.use('/avis', avis);
const category = require('./routes/categoriesRouter.js');
app.use('/categories', category);
const visiteur = require('./routes/visiteurRouter.js');
app.use('/visiteurs', visiteur);
const dashboard = require('./routes/dashboardRouter.js');
app.use('/dashboard', dashboard);

const commentaire = require('./routes/commentaireRouter.js');
app.use('/commentaires', commentaire);



// Port
const PORT = 5000;
app.listen(PORT, () => console.log('Server running on http://localhost:${port}'));