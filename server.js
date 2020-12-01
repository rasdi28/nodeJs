var http = require('http');
var server = http.createServer(function(req, res){
  res.end ("Hi, welcome to nodeJs ");
});
server.listen(8000);
console.log("server running on http:\\localhost:8000");