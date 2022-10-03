const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const db = require('./config/database')


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

app.get('/Contacts', (req, res) => {
  res.render('Contacts');
});


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.listen(3000, () => console.log('Server running on http://localhost:${port}'));