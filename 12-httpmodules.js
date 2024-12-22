const http = require('http');

const server = http.createServer((req, res) => {
  

    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`We can't find your thing`);
    }
});

server.listen(5000);