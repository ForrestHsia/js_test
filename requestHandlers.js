var exec = require('child_process').exec;
var queryString = require("querystring"),
    fs = require("fs");


// function start(){
//     console.log("Request handler 'start' was called.");
//     function sleep(milliSecond){
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime+milliSecond);
//     }
//     sleep(15000);
//     return "Request start 3secs";
// };

function start(response){
    console.log("Request handler 'start' was called.");
    
    let body=
    "<html>" + 
    "<head>" + 
        "<meta http-equiv='Content-Type' content='text/html' charset='utf-8' />" + 
        "</head>" + 
    "<body>" + 
    "<script>" +
    "let mazeArray = [[2,2,2,2,2,2,2,2,2,2],[2,1,2,2,1,2,1,2,1,2],[2,1,2,1,1,1,1,1,1,2],[2,1,2,1,1,2,1,2,1,2],[2,1,1,1,1,1,1,1,1,2],[2,1,1,1,1,1,1,2,1,2],[2,1,1,2,1,2,1,1,1,2],[2,1,2,1,1,1,2,1,1,2],[2,1,2,1,1,1,1,1,1,2],[2,2,2,2,2,2,2,2,0,2]];" +
    "</script>"+   
    "<form action = '/upload' method='post'>" + 
        "<textarea name='text' rows='20' cols='20'>" + "</textarea>" + 
        "<input type='submit' value='submitText'/>" + 
        "</form>" + 
        "</body>" + 
"</html>"

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
    
};

function upload(response, postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(queryString.parse(postData).text);
    response.end();
};

function show(response, postData){
    console.log("Request handler 'show' was called.");
    fs.readFile("./lanew01.jpg","binary",function(error,file){
        if(error){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Something wrong with the uploaded file");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, "binary");
            response.end();
        }
    });
}

function maze(response){
    console.log("Request handler 'maze' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello maze");
    response.end();
};

exports.start = start;
exports.upload = upload;
exports.maze = maze;
exports.show = show;