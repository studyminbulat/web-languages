require('net')
    .createServer(socket =>
        socket.on('data', data =>
            socket.write(`Hello, you said: ${data}`)
        )
    )
    .listen(1234);