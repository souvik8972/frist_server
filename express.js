const http=require("http")
const bodyparser=require('body-parser')

const express=require("express");
const app= express();
app.use("/",(req,res,next)=>{
    console.log("repeting")
    next();
})
app.use(bodyparser.urlencoded({extended: true}))

app.use("/add-product", (req, res, next) => {
    console.log("in a product");
    res.send("<form action='/product' method='POST'>  <input type='text' name='title'><button type='submit'>submit</button></form>");
});
app.post('/product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/add-product')

})

app.use("/",(re,res,next)=>{
    console.log("in a middle ware");
    res.send("hiii")
});
app.listen(3000)