var article = {0: {
	"alcool": "false",
	"categorie_id": "623",
	"id": "13859",
	"name": "BarBar Blonde",
	"oldprice": "158",
	"price":"160"
}};


var articles = JSON.parse(article);

var prix = articles[0]['price'];
console.log(prix);