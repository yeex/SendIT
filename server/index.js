import express from 'express';
import  middleware from "./middleware";

const server = express();
server.use(express.json());
middleware(server);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
export default server;