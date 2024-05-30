import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send(`A request was made to ${req.path}`);
});

app.get('/notes', (req, res) => {
  res.send(`A request was made to ${req.path}`);
});

app.post('/notes/:id', (req, res) => {
  res.send(`A request was made to ${req.path}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
