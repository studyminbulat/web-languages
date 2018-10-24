require('http')
    .createServer((req, res) => {
        if (req.url === '/runaway') process.nextTick(()=>{
            throw new Error('Server has unexpectedly quitted!')
        });
        console.log(req.url);
            res.writeHead(404, {
                'Content-Type': 'text/plain',
                'name': 'Elias'
            });
            res.end(`Hello, you said: ${req.url}`);
            console.log(String(data));
        }
    )
    .listen(1234);