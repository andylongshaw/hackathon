var request = require('request');
var argv = require('optimist')
    .usage('Usage: $0 --host [host] --port [port] --request [request]')
    .demand(['host','port','request'])
    .argv;
var querystring = require("querystring");

console.log('performing http get for server %s on port %s with request %s', argv.host, argv.port, argv.request);

var postData = querystring.stringify ( argv.request );
var hostString = '';
if(!argv.host.startsWith('http://'))
{
  argv.host = 'http://' + argv.host;
}
hoststring = argv.host + ':' + argv.port;

var options =  {
  url: hoststring,
  qs: argv.request,
  method: 'GET'
  };


request(
  {
    url: hoststring,
    qs: argv.request,
    method: 'GET'
  }
  , function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(body);
    }
});
