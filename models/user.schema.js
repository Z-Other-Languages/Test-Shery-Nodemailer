const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, { timestamp: true })


const UserCollection = mongoose.model('MERN10__Test', user_schema);

module.exports = UserCollection;

console.log("Schema Working");