var express = require('express');
var app = express();

var Repository = require('mongoRepository').Repository;
var quoteRepository = new Repository('localhost/quotes', 'quotes');

app.use(express.bodyParser());

app.get('/', function(req, res) {
  quoteRepository.find({}, function(quotes) {
    var response = {
      quotes: quotes
    };
    res.json(response);
  });
});

app.get('/quote/:id', function(req, res) {
  quoteRepository.find({ "_id" : quoteRepository.db.ObjectId(req.params.id) }, function(quote) {
    res.json(quote);
  });
});

app.post('/quote', function(req, res) {
  if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  res.json(true);
  quoteRepository.add(req.body);
});

app.delete('/quote/:id', function(req, res) {
  quoteRepository.remove({_id: quoteRepository.db.ObjectId(req.params.id)});
  res.json(true);
});

app.listen(process.env.PORT || 3400);


//curl -X POST -H "Content-Type: application/json" -d '{"author":"Martin Luther King Jr","text":"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character."}' http://localhost:3412/quote
//curl -X POST -H "Content-Type: application/json" -d '{"author":"Albert Einstein","text":"I never think of the future. It comes soon enough."}' http://localhost:3412/quote

//curl -i -H "Accept: application/json" -X DELETE http://localhost:3412/quote/522063b0b513e4bd2e000001

//curl -X POST -H "Content-Type: application/json" -d '{"author":"foo","text":"bar"}' http://localhost:3412/quote
//curl -i -H "Accept: application/json" -X DELETE http://localhost:3412/quote/5220728e287a903a3f000001
