import fastify from 'fastify';

function createServer() {
  const server = fastify({ logger: true, trustProxy: true });

  server.get('/', async () => ({ status: 'OK' }));

  return server;
}

export default createServer;
