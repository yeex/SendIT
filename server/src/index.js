import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

routes(server);


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
export default server;
