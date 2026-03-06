const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});

app.get('/coinFlip', function(req, res) {
  const times = parseInt(req.query.times, 10) || 1;
  let results = [];
  for (let i = 0; i < times; i++) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    results.push(result);
  }
  res.status(200).json({ result: results });
});

app.get('/diceRoll', function(req, res) {
  const times = parseInt(req.query.times, 10) || 1;
  let results = [];
  for (let i = 0; i < times; i++) {
    const result = Math.floor(Math.random() * 6) + 1;
    results.push(result);
  }
  res.status(200).json({ results });
});

app.get('/randomNumber', function(req, res) {
  const min = parseInt(req.query.min, 10) || 1;
  const max = parseInt(req.query.max, 10) || 100;
  if (min >= max) {
    return res.status(400).json({ error: 'Min should be less than max.' });
  }
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  res.status(200).json({ result });
});