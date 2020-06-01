import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Teste',
    'Teste2'
  ]);
});

app.listen(3333);