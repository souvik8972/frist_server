// // // // const http = require('http');

// // // // const server = http.createServer((req, res) => {
// // // //   console.log("Souvik")
// // // // });



// // // // server.listen(4000)
// // // const http = require('http');

// // // const server = http.createServer((req, res) => {
// // //   // Get the URL from the request object
// // //   const url = req.url;

// // //   // Set the response content type to plain text
// // //   res.setHeader('Content-Type', 'text/plain');

// //   // Check the URL and provide custom responses
// // //   if (url === '/home') {
// // //     res.end('Welcome home\n');
// // //   } else if (url === '/about') {
// // //     res.end('Welcome to About Us page\n');
// // //   } else if (url === '/node') {
// // //     res.end('Welcome to my Node.js project\n');
// // //   } else {
// // //     // For any other URL, return a generic message
// // //     res.end('Welcome to my website\n');
// // //   }
// // // });

// // // const port = 4000;
// // // console.log(`Server is running on http://localhost:${port}`)

// // // server.listen(port)
 
 
// // // const http= require ('http');
// // // const server= http.createServer((req,res)=>{
// // //   const url = req.url;
 
// // //   if (url === '/home') {
// // //     res.end('Welcome home\n');
// // //   } else if (url === '/about') {
// // //     res.end('Welcome to About Us page\n');
// // //   } else if (url === '/node') {
// // //     res.end('Welcome to my Node.js project\n');
// // //   } else {
// // //     // For any other URL, return a generic message
// // //     res.end('Welcome to my website\n');
// // //   }
// // // });
// // // const port=4000;

// // // console.log(`Server is running on http://localhost:${port}`);
// // // server.listen(port)
// // const http=require("http")
// // const server=http.createServer((req,res)=>{
// //   const url =req.url;
// //   if(url==='/home'){
// //     res.end("homeee")

// //   }
// //   else{
// //     res.end('ckancakxc')
// //   }

// // })
// // const port=3000;
// // server.listen(port);
// // console.log(`http://localhost${port
// // }`)
// const http=require("http");
// const server=http.createServer((req,res)=>{
//   const url=req;
//   if (url==='/'){
//     res.write('<html>')
//     res.write("<head><title>my server</title></head>");
    
//     res.write("<body><form action="/massage" method='POST'><input type='text' name='massage'> <button type='submit'>send<button></form></body>");
    
//     res.write("</html>")
//     res.end()

//   }
//   res.setHeader("content-type", "text/html");
//   res.write('<html>')
//   res.write("<head><title>my server</title></head>")
  
//   res.write("<body><h1>hello</h1></body>")
  
//   res.write("</html>")
//   res.end()
// })
// server.listen(3000)