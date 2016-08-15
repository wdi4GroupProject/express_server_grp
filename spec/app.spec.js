var app = require('../app');
var supertest = require("supertest");


describe("Express Server API", function() {
  it('returns users json and 200 code', function(done) {
    supertest(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe("Express Server API",function(){
  it("returns 404 Page not found",function(done){
    supertest(app)
      .get('/members')
      .expect(404,done);
  });
});
