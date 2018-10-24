const express = require('express');
const PORT = 4321;
const app = express();
const bodyParser = require('body-parser');

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .get('/api/posts/', r => { // get last posts

        // return array of posts
        r.res.send()
    })
    .post('/api/posts/', r => {  // create new post

        // return post with id
        r.res.send()
    })
    .get('/api/posts/', r => { // get a post by id

       // return post
        r.res.send()
    })
    .get('/api/posts/', r => { // delete a post by id

       // return post
        r.res.send()
    })

    .use(r => r
        .res
        .set({'Content-Type': 'application/json; charset=utf-8'})
        .status(404)
        .end('No 404'))

    .listen(process.env.PORT || PORT, () => console.log('Server listen'));