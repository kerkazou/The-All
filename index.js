const express = require('express');
const cors = require('cors');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
var corOptions = {
    origin: 'http://localhost:5000'
}

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routers
const router = require('./routes/articleRouter.js');
app.use('/api/products', router);   // ?????

// Testing API
app.get('/', (req, res) => {
  res.render('The-All');
});
app.get('/The-All', (req, res) => {
  res.render('The-All');
});
app.get('/The-All-Article', (req, res) => {
  res.render('The-All-Article');
});
app.get('/Dashboard', (req, res) => {
  res.render('Dashboard');
});
app.get('/Profile', (req, res) => {
  res.render('Profile');
});
app.get('/Articles', (req, res) => {
  res.render('Articles');
});
app.get('/Contacts', (req, res) => {
  res.render('Contacts');
});
app.get('/Article', (req, res) => {
  res.render('Article.ejs');
});
app.get('/categories', (req, res) => {
  res.render('categories.ejs');
});
app.get('/commentaires', (req, res) => {
  res.render('commentaires.ejs');
});
app.get('/Avis', (req, res) => {
  res.render('Avis.ejs');
});

// Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('Server running on http://localhost:${port}'));