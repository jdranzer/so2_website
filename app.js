var express = require('express');
var app = express();

function getRedisData(callback){
	callback({ someRedisData: 'fromRedisHere' });
}

app.get('/getdata', function(req,res){
	getRedisData(function(data){
		res.send(data);
	});
});

app.get('/', function(req,res){
	res.send('Hello World!');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});
