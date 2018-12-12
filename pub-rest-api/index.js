
const express = require('express');
const pubsServices = require('pub-services').pubsServices;
const app = express();

app.get('/pubs', function (req, res) {
  const pubs = pubsServices.getAllPubs();
  res.status(200).json(pubs);

})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
