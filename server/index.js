const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const database = require('../database/index.js');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //handle req
    //fetch data from github api
    //on res, grab needed data, parse to JSON.
    //invoke save function in db/index.js and save to db

  github.getReposByUsername(req.body.term, (gitData) => {
    database.save(JSON.parse(gitData));
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  database.query((topRepos) => {
    res.send(topRepos);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


  // github.getReposByUsername(req.body.term, (gitData) => {
  //   console.log(gitData);
  // });