var request = require('request');
var fs = require('fs');
var argv = require('optimist')
    .usage('Usage: $0 --host [host] --port [port] --path [path] --formdatafile [formdatafile]')
    .demand(['host','port','path','formdatafile'])
    .argv;
var querystring = require("querystring");

console.log('performing http post for server %s on port %s with path %s', argv.host, argv.port, argv.path);

var postData = querystring.stringify ( argv.request );
var hostString = '';
if(!argv.host.startsWith('http://'))
{
  argv.host = 'http://' + argv.host;
}
hoststring = argv.host + ':' + argv.port;

console.log("FormDataFile to read : %s", argv.formdatafile);

var formData = fs.readFileSync(argv.formdatafile);
var formObject = JSON.parse(formData);

console.log(formObject);

var options =  {
  url: hoststring,
  qs: argv.request,
  method: 'POST',
  form: formObject
  };
request.post( options,
    function(error, response, body)
    {
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
    }
  );
