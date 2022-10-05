const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

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
const category = require('./routes/categoriesRouter.js');
app.use('/categories', category);
const visiteur = require('./routes/visiteurRouter.js');
app.use('/visiteurs', visiteur);



// Port
const PORT = 5005;
app.listen(PORT, () => console.log('Server running on http://localhost:${port}'));