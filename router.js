function route(handle, pathname, response, postData){
    console.log("This is about to route a request for " + pathname);
    if(typeof handle[pathname] === "function"){
        handle[pathname](response, postData);
    } else {
        console.log("No request handlers found for " + pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 Not Found");
        response.end();
    };
};

exports.route = route;