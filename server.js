var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Woohoo! I am a coding ninja noW!');
});

app.get('/nickname', function(request, response){
    response.send('outstanding-lark');
});



app.listen(process.env.PORT || 4000);