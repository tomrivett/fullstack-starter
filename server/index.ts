import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/is-prime/:number', (req, res) => {
  // TODO
});

app.listen(8000, () => {
  console.log('API listening on port', process.env.PORT);
});
