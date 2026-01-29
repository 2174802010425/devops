const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello DevOps - deployed successfully 🚀');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
