const express = require('express');

const app = express();

app.use(express.static('./dist/jwp-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/jwp-app/'}),
);

app.listen(process.env.PORT || 8080);