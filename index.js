var request = require("request"),
	cheerio = require("cheerio"),
	states  = require("states.json");


request.get("http://www.runningintheusa.com/Race/List.aspx?Rank=Upcoming&State=AL&Page=1" ,function(err, res){
	var $ = cheerio.load(res.body);
	var row1 = $('.MenuGridViewRow');
	var row2 = $('.MenuGridViewAlternatingRow');
});