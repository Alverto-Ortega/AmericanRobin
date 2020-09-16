//app file
//Entry point of project

//importv
var fortune = require('./lib/fortune.js');


var express = require("express");
var app = express(); //app creation

//set up handlebars view engine
var handlebars = require("express3-handlebars").create({defaultLayout:"main"});
app.engine("handlebars", handlebars.engine);
app.set("View engine", "handlebars");

app.set("port", process.env.PORT || 3000);
////////////////////////////////////////////////////////
//static middleware
app.use(express.static(__dirname + "/public"));

//routes for home and about page
app.get('/', function(req, res){
    res.render('home.handlebars'); //calls the view file to display its contents
    
});

//virtual fortune cookie
/*
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
*/

app.get("/about", function(req, res){
    //var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]; //randomizes the occurence of the fortune quote
    res.render('about.handlebars', {fortune: fortune.getFortune()});
});


// custom 404 page catch-all handler (middleware)
app.use(function(req, res, next){ 
    res.status(404);
    res.render('404.handlebars');
    
});

//custom 500 page error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500.handlebars');

});

app.listen(app.get("port"), function(){
    console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.")
});

