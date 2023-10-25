import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  return res.render('home', { layout: false });
});
app.get('/users', (req, res) => {
  return res.render('users', {
    layout: false,
    users: ['first', 'second', 'third'],
  });
});

app.listen(3000, () => {
  console.log('server started...');
});
