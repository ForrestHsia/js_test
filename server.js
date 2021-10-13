var foo = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " is received.");

        request.setEncoding("utf8");

        request.addListener("data",function(postDataChunk){
            postData += postDataChunk;
            console.log("Rcvd Post Data Chunk '" + postDataChunk + "'.");
        });

        request.addListener("end",function(){
            route(handle, pathname, response, postData);
        });

    }
    foo.createServer(onRequest).listen(8886);
    console.log("Server started");
}

exports.start = start;
