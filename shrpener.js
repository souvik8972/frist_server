const http = require("http");
const route=require("./routes")


const server = http.createServer(route).listen(3000);
