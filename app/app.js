var express = require('express');
var app = express();

app.use(express.logger());
app.use('/static', express.static(__dirname + '/static'));
app.get('/*', function(req, res){
  res.send('Express Hello World');
});

app.listen(8000);
console.log('Listening on port 8000');