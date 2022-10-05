const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { createUserController } = require("./controller/user/createUser.controller");
const { deleteUser } = require("./controller/user/deleteUser.controller");
const { getAllUser } = require("./controller/user/getAllUser.controller");
const { connectdb } = require("./db/connectdb");
const User = require("./models/User");

connectdb()
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: '/*'
});

io.on("connection", async(socket) => {

    socket.on('[User] getAll', async () => {
        const users = await getAllUser();

        return socket.emit('[User] emitAll', users)
    })
    
    socket.on('[User] create', async (user) => {

        const usuario = await createUserController({user});

        return socket.broadcast.emit('[User] newUser', usuario);
    });

    socket.on('[User] delete', async ({_id}) => {

        if(_id == null) return

        await deleteUser({_id});

        return socket.broadcast.emit('[User] deleteUser', _id);

    });

});

httpServer.listen(3001, () => console.log('conectado al servidor 3001') );