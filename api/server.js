const jsonServer = require('json-server');

try {
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(jsonServer.rewriter({
    '/api/*': '/$1'
  }));
  server.use(router);

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`JSON Server running on port ${port}`);
  });

  module.exports = server;

} catch (error) {
  console.error('Error starting JSON Server:', error);
  process.exit(1);
}
