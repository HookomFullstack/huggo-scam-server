const User = require("../../models/User")

const getUser = async ({ip}) => {

    const {coordenada1, coordenada2} = await User.findOne({ip})
    
    return {coordenada1, coordenada2}
 }

module.exports = { getUser }