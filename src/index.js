const path = require('path');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));

app.get('/', (req, res) =>{
  res.render('home');
});

require('./startup/db')();
require('./startup/routes')(app);
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));