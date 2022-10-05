const mongoose = require('mongoose');



const connectdb = async() => {

    try {

        await mongoose.connect( 'mongodb+srv://MiguelFullstack:Hookom119@miguelfullstack.xbouv6j.mongodb.net/huggo-scams');
        return console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    connectdb
}