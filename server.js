const express = require('express');
const app = express();
const path = require('path');

// Serve compiled docs
app.use('/', express.static(__dirname + '/docs'));

// Viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/docs/index.html'));
});

app.listen(8080);

// Fire it up
console.log(`
========== JACK =========

    Running server at:
  http://localhost:8080

========= ENJOY =========
`);