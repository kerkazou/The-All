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

<<<<<<< HEAD
app.get('/Profile', (req, res) => {
  res.render('Profile');
});

app.get('/Contacts', (req, res) => {
  res.render('Contacts');
});

=======
>>>>>>> 6d4758b340297f262290e24f9154c592a07ad051
app.listen(5000, () => console.log('Server running on http://localhost:${port}'));