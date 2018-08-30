const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res, gitData) => {
    if (err) {
      console.log('err');
    }
    callback(gitData);
  })

}

module.exports.getReposByUsername = getReposByUsername;




  // request.get(options, (err, gitData) => {
  //   if (err) {
  //     console.log(err, null);
  //   }
  //   console.log('it should be working');
  //   callback(gitData);
  // });