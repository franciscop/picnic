var express = require('express');
var path = require('path');
var compress = require('compression');
var build = require('./web/build');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(compress());
app.use(express.static(__dirname + '/web'));

// Use the routes in /routes.js
app.use('/nut/:full', build);

app.listen(process.env.PORT || 3000);