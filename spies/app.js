const db = require('./db');


module.exports.handleSignup = (email, password) => {


    //check if email already exist
    db.saveUser({email,password});
    //save user to the database

    //send welcome email to user

};