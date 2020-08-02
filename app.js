const express     = require('express');

const app = express();

app.use('/', express.static(`${__dirname}/build`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(8080, err=> {
  if(err) {
    console.log('err', err);
  }
  console.log('server is running on 8080 port');
})
