/**
 * Created by psquicciarini on 5/25/17.
 */

const express = require('express');

const mbUrl = 'https://gist.githubusercontent.com/stripedpajamas/b8f9b651fa91dfef5d8cf887598bd097/raw/324025cbd26f83b3b2aa84c461b9c9e38489b5ee/mobydick.txt';
const data = `#!/bin/bash
# run bash <(curl -s [url]) to do it
curl -s ${mbUrl} | say`;

const app = express();

app.get('/', (req, res) => {
  res.type('text');
  res.send(data);
});
app.listen(process.env.PORT || 3000);