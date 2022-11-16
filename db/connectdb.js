const mongoose = require('mongoose');
require('dotenv').config()

const connectdb = async() => {

    try {
        
        await mongoose.connect( 'mongodb+srv://compa:hola1234$@cluster0.6rpwwim.mongodb.net/huggo-scam' );
        return console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    connectdb
}