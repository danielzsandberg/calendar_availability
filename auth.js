'use strict';

let net = require('net');
let http = require('http');
let server = http.createServer();

server.listen(
  {
    "port": 325,
    "host": "localhost"
  }
);

server.on("request", function(req,res){
  console.log(req.url);
});
