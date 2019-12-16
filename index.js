const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	var crypto = req.body.crypto;
	var fiat = req.body.fiat;
	var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
	var finalURL = baseURL + crypto + fiat;

	request(finalURL, function (error, response, body) {
		console.log('body:', body);
	});

});


app.listen(3000, function(){
	console.log("Express Server is listening on port 3000 ");
})