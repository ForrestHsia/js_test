var serve = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/maze"] = requestHandlers.maze;
handle["/show"] = requestHandlers.show;

serve.start(router.route,handle);