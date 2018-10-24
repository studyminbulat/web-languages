const http = require('http')
let t;
void http.get('http://kodaktor.ru/j/users', (r, b = '') => {
    r.on('data', d => b += d);
    r.on('end', () => {
        t = JSON.parse(b);
        console.log(t);
    });
});