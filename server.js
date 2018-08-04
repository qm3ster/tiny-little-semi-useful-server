const http = require('http');

const server = http.createServer((req, res) =>  {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <headD>
        <style>
          * {
            font-family: 'Helvetica Neue'
          }
        </style>
      </head>
      <body>
        <h1>Crafter carefully for you</h1>
      </body>
    </html>
  `);
});

server.listen(4000);
