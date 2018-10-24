const express = require('express');
const PORT = 4321;
const app = express();
const bodyParser = require('body-parser');
const routes_count = {};

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use((r, res, next) => console.log(r.url) || next())
    .use((r, res, next) => {
        if ( routes_count[r.url])
            routes_count[r.url]+=1;
        else
            routes_count[r.url]=1;
        console.log(routes_count);
        next();
    })
    .get('/', r => res.send('Hello world!')
    )
    .get('/fuckup', r => {
        throw new Error('I`m just destroy')
    })
    .get('/webweb', r => r.res.send('We are awesome!'))
    .get('/add/:a/:b', r => {
        const [ a , b ] = [Number(r.params.a), Number(r.params.b)];
        r.res.send(`${a+b}`)
    })
    .get('/subtract/:a/:b', r => {
        const [ a , b ] = [Number(r.params.a), Number(r.params.b)];
        r.res.send(`${a-b}`)
    })
    .get('/multiply/:a/:b', r => {
        const [ a , b ] = [Number(r.params.a), Number(r.params.b)];
        r.res.send(`${a*b}`)
    })
    .get('/divide/:a/:b', r => {
        const [ a , b ] = [Number(r.params.a), Number(r.params.b)];
        r.res.send(`${a/b}`)
    })
    .get('/pow/:a/:b', r => {
        const [ a , b ] = [Number(r.params.a), Number(r.params.b)];
        r.res.send(`${a**b}`)
    })
    .get('/kramer/:a1/:b1/:c1/:a2/:b2/:c2', r => {
        r.res.send(`{"x":13,"y":47}`)
    })
    .use(r => r
        .res
        .set({'Content-Type': 'text/html; charset=utf-8'})
        .status(404)
        .end('No 404'))
    /*.use((e, r, res, n) => res
        .set({'Content-Type': 'text/html; charset=utf-8'})
        .status(500)
        .end('Error 500'))*/
    .listen(process.env.PORT || PORT, () => console.log('I`m OK'));