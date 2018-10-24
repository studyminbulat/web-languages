const http = require('http');
const moment = require('moment');

http.createServer((req, res) => {
    const url = req.url;
    if (url.search(/\/add\/\d+\/\d+/g) === 0) {
       const [a, b] =  (url.match(/\d+/g) );
       res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Сумма: '+(Number(a)+Number(b)))
    }


    else {
        res.end(moment().format('DD.MM.YYYY HH:mm:ss'))
    }
}).listen(4321);