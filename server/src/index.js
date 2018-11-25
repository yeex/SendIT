import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
// server.use(jsend.middleware);
// server.use(cors());

routes(server);

// All invalid routes
server.all('*', (req, res) => {
  res.status(404).jsend.error({
    code: 404,
    message: 'Page not found',
  });
});


const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
export default server;
