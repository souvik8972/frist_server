const http=require("http");

const expr=require("express");
const app= expr();
app.use((req,res,next)=>{
    console.log("hiiiiiiuiiiii9iiiii ");
    next();
     
});
app.use((req,res,next)=>{
    console.log("miiiiidddddd");
    
     
})
const server=http.createServer(app  )
server.listen(3000)
