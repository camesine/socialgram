var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get("/", function(req, res){
	res.render('index', { 'title' : 'SocialGram' });
});

app.get("/signup", function(req, res){
	res.render('index', { 'title' : 'SocialGram - Signup' });
});

app.get("/signin", function(req, res){
	res.render('index', { 'title' : 'SocialGram - Signin' });
});


app.listen(8000, function(err){
	if(err) return console.log(err), process.exit(1);

	console.log("SocialGram escuchando en el puerto 8000");
});