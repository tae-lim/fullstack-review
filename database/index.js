const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to mongo database!');
});

let Schema = mongoose.Schema;

let repoSchema = new Schema({
    owner: String,
    name: String,
    description: String,
    url: String,
    watchers: Number,
    created_at: Date,
    updated_at: Date,
});

let Repo = mongoose.model('Repo', repoSchema);

//when we save POST data
let save = (gitData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  //iterate over each repo from gitData
  //instantiate new Repo
    //name is repo.name
    //description is repo.description
    //url is repo.url
    //watchers is repo.watchers
    //owner is repo.owner.login
  //if instance in database doesn't exist ->
  //save instance
    //if error
      //log error
    //it worked!
  gitData.forEach(repo => {
    let Repository = new Repo({
      owner: repo.owner.login,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      watchers: repo.watchers,
      created_at: repo.created_at,
      updated_at: repo.updated_at
    });
    Repository.save((error) => {
      if (error) {
        console.log(error);
      }
      console.log('it worked!');
    });
  })

};

//when we request data from db.
//sort the usernames
//find the username in database up to 25 repos
//return sorted query by username
//i: username search string
//o: query
let query = (callback) => {
  Repo.find({})
  .sort({'watchers': -1})
  .sort({'updated_at': -1})
  .limit(25)
  .exec((err, users) => {
    if (err) {
      console.log('query not returning data');
    }
    callback(users);
  });
};

module.exports.save = save;
module.exports.query = query;