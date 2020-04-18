const db = require('../db/connection');

module.exports = function(req, res){
  // if there are no query param send just early return
  // Check if username is present inside db & have the same password has query sent
  // If not match return 401 status
  // if everythin is ok return a new token
};