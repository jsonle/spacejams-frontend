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

  socket.on('enter', user => {
    console.log(`${user.display_name} entered room_${user.room_id}`)
    socket.join(`room_${user.room_id}`);
    io.in(`room_${user.room_id}`).emit('joinRoom', joinMessage(user))
  })

  socket.on('sendMessage', message => {
    io.in(`room_${message.room_id}`).emit('receiveMessage', chatMessage())
  })
  
})
  
server.listen(port, () => console.log(`Listening on port ${port}`))

const chatMessage = (message) => {
  return {
    user_name: message.user.display_name,
    content: message.content
  }
}

const joinMessage = (user) => {
  return {
    user_name: user.display_name,
    content: "has joined the room"
  }
}