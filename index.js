const express = require('express');
const echoRouter = require('./echo-router');

const app = express();

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('home route');
});

app.use('/public', echoRouter);
app.use('/internal', echoRouter);

app.listen(8765, () => console.log('Example app listening on port 8765!'));
