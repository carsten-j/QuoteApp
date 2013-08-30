var request = require('supertest');
var should = require('should');



describe('second Test', function () {
  var url = 'http://localhost:3400';
  it("should respond with Walt Disney", function (done) {
    request(url)
      .get('/quote/52205a6da2c59d619f313a80')
      .expect('Content-Type', /json/)
      .end(function (error, res) {
        if (error){
          throw error;
        }
        console.log(res.body);
        //res.should.have.status(213);
        res.body.should.have.property('asdfsadauthor');
        done();
      });
  });
});


describe('foo', function(){
  var user = {
    name: 'tj'
    , pets: ['tobi', 'loki', 'bandit']
  };

  user.should.have.property('name', 'tj');
  user.should.have.property('pets').with.lengthOf(4);
});

/*
var request = require('request');


describe('first Test', function () {
  it("should respond with Walt Disney", function (done) {
    request("http://localhost:3400/quote/52205a6da2c59d619f313a80", function (error, response, body) {
      var json = JSON.stringify(body);
      expect(json).toContain("Walt Disney");
    //  expect(JSON.parse(body)["author"]).toEqual("Walt Disney");
      done();
    });
  });
});
*/


