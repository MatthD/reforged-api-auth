module.exports = function(req, res){
  // if there are no query param send just early return
  // Check if username is not already present inside db
  // If match return 400 eror 
  // If not check if user has sent password & create the user inside db {username, password, creationDate}
  // if everything is ok return the token corresponding to user with userID inside
}; 