const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const { createUserController } = require("./controller/user/createUser.controller")
const { deleteUser } = require("./controller/user/deleteUser.controller")
const { getAllUser } = require("./controller/user/getAllUser.controller")
const { connectdb } = require("./db/connectdb")
const cors = require('cors')
const { seed } = require("./factory/seed")
const { deleteAllBank } = require("./controller/user/deleteAllUser.controller")
const { disconnectLive } = require("./controller/live/disconnectLive.controller")
require('dotenv').config()

connectdb()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { 
    cors: '/*'
})

app.use(cors())

// io.use((socket, next) =>{
//     // console.log(socket)
//     next()
// })

io.on("connection", async(socket) => {

    socket.on('[User] getAll', async () => {
        const users = await getAllUser()
        return socket.emit('[User] emitAll', users)
    })
    
    socket.on('[User] create', async (user) => {
        const usuario = await createUserController({user})
        return socket.broadcast.emit('[User] newUser', usuario)
    })
    
    socket.on('[User] delete', async ({_id}) => {
        if(_id == null) return
        await deleteUser({_id})
        return socket.broadcast.emit('[User] deleteUser', _id)
    })

    // BORRAR TODOS LOS USUARIOS SEGUN EL BANCO
    socket.on('[User] deleteAll', async ({bank}) => {
        if(bank == null) return
        await deleteAllBank({bank})
        return socket.broadcast.emit('[User] deleteAllBankEmit', {bank})
    })


    // MODE LIVE
    socket.on('[LIVE] changeUrlPanel', ({url, viewError, socketID}) => { 

        io.to(socketID).emit('[LIVE] changeUrlClient', {url, viewError} 
    )})

    socket.on('disconnect', () => { disconnectLive({socketID: socket.id}) })
})


// seed(1000)

app.use(express.static("public"))


httpServer.listen(3001, () => console.log(`conectado al servidor ${3001}`) )