const express = require('express')
const http = require('http')
const socketIO = require('socket.io')


const port = process.env.PORT || 8000;
const app = express()
const server = http.createServer(app);

const io = socketIO(server)

io.on('connection', socket => {

  socket.on('leave', room => {
    console.log(`user left ${room}`)
    socket.leave(room)
  })
  socket.on('enter', room => {
    console.log(`user entered ${room}`)
    socket.join(room);
  })
  
    
})
  
server.listen(port, () => console.log(`Listening on port ${port}`))