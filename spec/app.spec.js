require('../app');
var request = require("request");
var base_url = "http://localhost:8000/";
var about_url = "http://localhost:8000/about";
var contact_url = "http://localhost:8000/contact";

describe("Express Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get( base_url,
        function(err, response, body) {
          expect( response.statusCode ).toBe(200);
          done();
        }
    );
    });
  });
  describe("GET /about", function(){
    it("returns status code 200", function(done) {
      request.get( about_url,
        function(err, response, body){
          expect( response.statusCode).toBe(200);
          done();
        });
    });
  });
  describe("GET /contact", function(){
    it("returns status code 200",
    function(done) {
      request.get( contact_url, function(err,response,body){
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

});
