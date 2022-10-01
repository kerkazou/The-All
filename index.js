const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('The-All');
});

app.get('/The-All', (req, res) => {
  res.render('The-All');
});
app.get('/Article', (req, res) => {
  res.render('Article.ejs');
});
app.get('/categories', (req, res) => {
  res.render('categories.ejs');
});

app.get('/Dashboard', (req, res) => {
  res.render('Dashboard');
});

app.listen(5000, () => console.log('Server running on http://localhost:${port}'));