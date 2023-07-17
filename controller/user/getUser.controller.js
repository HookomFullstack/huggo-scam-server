const User = require("../../models/User")

const getUser = async ({ip}) => {

    const {username, typeDevice, numberDevice} = await User.findOne({ip})
    
    return {username, typeDevice, numberDevice}
 }

module.exports = { getUser }