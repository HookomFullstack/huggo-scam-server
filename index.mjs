import express  from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
// import { createUserController } = require('./controller/user/createUser.controller')
// import { deleteUser } = require('./controller/user/deleteUser.controller')
// import { getAllUser } = require('./controller/user/getAllUser.controller')
import { connectdb } from './db/connectdb.mjs'
// import cors = require('cors')
// import { seed } = require('./factory/seed')
// import { deleteAllBank } = require('./controller/user/deleteAllUser.controller')
// import { disconnectLive } = require('./controller/live/disconnectLive.controller')
// import { getUser } = require('./controller/user/getUser.controller')
// import { changeLive } = require('./controller/live/changeLive.controller')
// require('dotenv').config()

// connectdb()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { 
    cors: ['https://*.repl', 'http://localhost:3000', 'http://localhost:3001'] 
})

// server-side
io.on('connection', (socket) => {
    socket.handshake.headers.origin
    console.log(socket.request.headers.cookie)
})
    
io.on('connection', async(socket) => {

    if(socket.handshake.headers.origin === ('http://localhost:3000') ) await socket.join('p0*aBfKPHio*2wJbt6>42)<LlDJ3')

    
})

app.get('/', (req, res) => console.log('testeando'))

// seed(1000)

app.use(express.static('public'))


httpServer.listen(3001, () => console.log(`conectado al servidor ${3001}`) )