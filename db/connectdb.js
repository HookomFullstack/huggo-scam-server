const mongoose = require('mongoose');
require('dotenv').config()

const connectdb = async() => {

    try {
        
        await mongoose.connect( 'mongodb://127.0.0.1:27017' );
        return console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    connectdb
}