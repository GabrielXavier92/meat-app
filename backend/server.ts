import * as jsonServer from 'json-server';
import { Express } from 'express';

import * as fs from 'fs';
import * as https from 'https';

import { handleAuthorization } from './auth/authz';
import { handleAuthentication } from './auth/auth';

const PORT = 3004;
const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication);
server.use('/orders', handleAuthorization);

server.use(router);

const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

https.createServer(options, server).listen(PORT, () => {
  console.log(`JSON Server is running na porta ${PORT}`)
})