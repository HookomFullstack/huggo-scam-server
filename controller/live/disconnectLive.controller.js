const User = require("../../models/User");

const disconnectLive = async ({socketID}) => {
    if (socketID === undefined) return
    
    const existUser = await User.findOne({ socketID });

    if(existUser) {
        const isConnected = false
        const usuario = await User.findOneAndUpdate({
            _id: existUser._id,
            deleteUser: false
        }, 
        { $set: {isConnected} },
        { new: true }  
        )
        return usuario;    
    }
    return null
}

module.exports = { disconnectLive }