var express = require('express');
var path = require('path');
var compress = require('compression');
var controller = require('./web/controller');
var info = require('./package.json');

var app = express();

// Pass the info to all of the
app.locals.info = info;

app.set('views', path.join(__dirname, 'web/views'));
app.set('view engine', 'jade');

app.use(compress());
app.use(express.static(__dirname + '/web'));
app.use("/plugins", express.static(__dirname + "/plugins"));

// Routing
app.use('/documentation/', controller.documentation);
app.use('/plugins/:name', controller.plugins);
app.use('/plugins/', controller.plugins);
app.use('/test/', controller.test);
app.use('/', controller.index);


app.listen(process.env.PORT || 3000);
