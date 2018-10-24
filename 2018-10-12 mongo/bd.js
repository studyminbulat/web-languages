require('dotenv').config();
const m = require('mongoose');
m.Promise = global.Promise;

const conn = m.createConnection(process.env.URL);
const UserSchema = new m.Schema({
    "login": {
        type: "String"
    },
    "password": {
        type: "String"
    },
});
const User = conn.model('User', UserSchema);
module.exports = {User};