const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'sql.freedb.tech',
  user: 'freedb_shms19334',
  password: 'H$!8ES2#@ny@hKd',
  port: 3306,
  database: 'freedb_sandramar05'}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);



// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
