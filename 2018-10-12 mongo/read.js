const {User} = require('./bd');
const login = 'prof@univer.msk.ru';

async function getPass() {
    //const ob = await User.findOne({login}).exec();
    const {password} = await User.findOne({login}).exec();
    //console.log(ob);
    //console.log(ob.login);
    //console.log(ob.password);
    console.log(password);
    process.exit(0);
}

getPass();