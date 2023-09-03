// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log("Souvik")
// });



// server.listen(4000)
const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL from the request object
  const url = req.url;

  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL and provide custom responses
  if (url === '/home') {
    res.end('Welcome home\n');
  } else if (url === '/about') {
    res.end('Welcome to About Us page\n');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project\n');
  } else {
    // For any other URL, return a generic message
    res.end('Welcome to my website\n');
  }
});

const port = 4000;
console.log(`Server is running on http://localhost:${port}`)

server.listen(port)


