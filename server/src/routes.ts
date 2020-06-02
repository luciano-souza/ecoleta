import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
  response.json({ message: "Hello Luciano"});
});

export default routes;