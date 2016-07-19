var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts=require('express-ejs-layouts');
var routes = require('./routes/index');

var passport = require('passport');
var expressSession = require('express-session');




var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);


app.use(expressSession({secret: 'uncoverredboss'}));
app.use(passport.initialize());
app.use(passport.session());
//app.use('/users', users);

var myRouter=new routes.myRouter(app,passport);
app.use('/', myRouter.router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {

    console.log(err.message);
    //console.log(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(2024,function(){
  console.log('UncoveredBoss is listening to  2024');
})


//app.set('layout','layouts/layoutMainPage.ejs');



module.exports = app;
