import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('hhaa hhaa');
});

app.set('port', process.env.PORT || 8001);

const server = app.listen(app.get('port'), () => {
  console.log('App is runing on http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log(' Press CTRL-C to stop \n');
});
