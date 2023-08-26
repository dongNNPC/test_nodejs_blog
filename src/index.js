const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;


//khai báo sử dụng các tài nguyên trong public
app.use(express.static( path.join(__dirname, 'public')));

const hbs = exphbs.create({
  helpers: {
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  },
  extname: '.hbs'
});

// http logger
app.use(morgan('combined'));

// template engine setup
app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resouces/views/'));

// render index
app.get('/', (req, res) => {
  res.render('body/home');
});

// render news
app.get('/news', (req, res) => {
  res.render('body/news');
});


//cổng
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
