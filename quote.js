var express = require('express');
var app = express();

var Repository = require('mongoRepository').Repository;
var quoteRepository = new Repository('localhost/quotes', 'quotes');
var RedisStore = require('connect-redis')(express);

app.use(express.cookieParser());
//app.use(express.session({ secret: 'foobar' }));

app.use(express.session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379
    }),
    secret: '1234567890QWERTY'
}));
 
app.use(app.router);

app.get('/', function (req, res) {
    quoteRepository.find({}, function (quotes) {
        var response = {
            quotes: quotes
        };
        res.json(response);
    });
});


app.get('/resetSession', function (req, res) {
    req.session.destroy()
    res.send('resetting sessions ...');
});

app.get('/awesome', function (req, res) {
    var responseText;
    if (req.session.lastPage)
        responseText = 'Last page was: ' + req.session.lastPage + '. ';
    else
        responseText = 'You\'re Awesome';

    req.session.lastPage = '/awesome';
    res.send(responseText);
});

app.get('/radical', function (req, res) {
    var responseText;
    if (req.session.lastPage)
        responseText = 'Last page was: ' + req.session.lastPage + '. ';
    else
        responseText = 'What a radical visit!';

    req.session.lastPage = '/radical';
    res.send(responseText);
});

app.get('/tubular', function (req, res) {
    var responseText;
    if (req.session.lastPage)
        responseText = 'Last page was: ' + req.session.lastPage + '. ';
    else
        responseText = 'Are you a surfer?';

    req.session.lastPage = '/tubular';
    res.send(responseText);
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
