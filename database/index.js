const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to the database!');
});

let Schema = mongoose.Schema;

let repoSchema = new Schema({
    name: String,
    description: String,
    url: String,
    watchers: Number,
    owner: String
});

let Repo = mongoose.model('Repo', repoSchema);

//when we save POST data
let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};

//when we request data from db.
let query = () => {

};

module.exports.save = save;
module.exports.query = query;