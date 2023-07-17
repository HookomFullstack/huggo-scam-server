const User = require("../../models/User")

const changeLive = async ({user}) => {

    const {socketID} = user

    const newUser = await User.findOneAndUpdate({
        socketID,
        deleteUser: false
    }, 
    { $set: user },
    { new: true })

    return newUser
}

module.exports = {changeLive}