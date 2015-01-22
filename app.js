var express = require('express');
var compress = require('compression');
var app = express();

app.use(compress());
app.use(express.static(__dirname + '/web'));

app.listen(process.env.PORT || 3000);