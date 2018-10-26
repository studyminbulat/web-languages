const m = require('mongoose');

const [login, password] = ['admin', 'F0WMwsUc8sesqtgm'];
const connectionString = `mongodb+srv://${login}:${password}@cluster0-5tld9.mongodb.net/test`


const conn = m.createConnection(connectionString);
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