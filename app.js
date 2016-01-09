var express = require('express');
var app = express();

var redis = require('redis');
var client = redis.createClient(6379,'192.168.122.17');

client.on('connect', function(){
    console.log('connected');
}
);

client.get('users:leto', function(err, reply){
    console.log(reply);
});

client.exists('users;GeorgeWashington', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});


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
