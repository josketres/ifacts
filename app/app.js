var express = require('express');
var app = express();

//Set views path, template engine and default layout
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.logger());
app.use('/static/managed', express.static(__dirname + '/bower_components'));
app.use('/static', express.static(__dirname + '/static'));
app.get('/', function(req, res) {
	res.render('index');
});
app.use('/test', express.static(__dirname + '/test/e2e'));


app.listen(8000);
console.log('Listening on port 8000');