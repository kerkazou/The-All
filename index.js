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

app.get('/Dashboard', (req, res) => {
  res.render('Dashboard');
});

app.get('/Profile', (req, res) => {
  res.render('Profile');
});

app.get('/Contacts', (req, res) => {
  res.render('Contacts');
});

app.listen(5000, () => console.log('Server running on http://localhost:${port}'));