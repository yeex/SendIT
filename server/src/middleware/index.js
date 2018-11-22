import routes from '../routes';


export default (app) => {
  app.use('/api/v1', routes);
};
// export default middleware;
