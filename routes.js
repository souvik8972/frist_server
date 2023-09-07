const fs = require("fs");




const reqhandler=(req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Handle the root URL
        fs.readFile("massage.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                // Handle file reading errors
                console.error(err);
                res.statusCode = 500; // Internal Server Error
                res.setHeader("Content-Type", "text/html");
                res.write("<html><body>Internal Server Error</body></html>");
                return res.end();
            }

            // Set response headers and send HTML content
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head> <title>Enter Msg</title> </head>');
            res.write('<body>');
            res.write(`<h1>${data}</h1>`);
            res.write('<form action="/massage" method="POST"><input type="text" name="massage"> <button type="submit">add</button></form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    } else if (url === "/massage" && method === "POST") {
        // Handle the /massage POST request
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const massage = parsedBody.split('=')[1];
            fs.writeFile('massage.txt', massage, (err) => {
                if (err) {
                    // Handle file writing errors
                    console.error(err);
                    res.statusCode = 500; // Internal Server Error
                    res.setHeader("Content-Type", "text/html");
                    res.write("<html><body>Internal Server Error</body></html>");
                    return res.end();
                }
                res.statusCode = 302; // Redirect
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    } else {
        // Handle other URLs
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>first</title> </head>');
        res.write('<body><h1>hello from</h1></body>');
        res.write('</html>');
        res.end();
    }
}
module.exports=reqhandler;