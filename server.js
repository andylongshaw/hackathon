// Require the http module
var http = require ("http");
var querystring = require("querystring");
var url = require("url");

// define a port to listen on
const PORT = 8080;


//We need a function which handles requests and send response
function handleRequest(request, response){

    var urlObject = url.parse(request.url,true);
    var query = '';

    for(var attribName in urlObject.path)
    {
      query += urlObject.path[attribName];
    }
    console.log('recieved request');
    console.log('Path:');
    console.log(query);
    console.log('Method: %s', request.method);
    var body = "";
    request.on('data', function (chunk) {
            body += chunk;
          });
    request.on('end', function () {
        console.log('body: ' + body);
      });
    response.end('It Works!! Path Hit: ' + query);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
