const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>DevOps Status App</title>
            </head>
            <body>
                <h1>🚀 DevOps Status App</h1>
                <p>Application is running successfully!</p>
                <p>Environment: Development</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("DevOps Status App running on port 3000");
});