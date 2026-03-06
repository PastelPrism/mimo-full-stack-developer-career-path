const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const quizRoutes = require('./quizRoutes');

app.use('/quiz', quizRoutes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});