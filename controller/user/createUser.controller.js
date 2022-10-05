const User = require("../../models/User");

const createUserController = async ({user}) => {
   
    const existUser = await User.findOne({
        name: user.name,
        ip: user.ip
    });

    if(existUser) {

        const usuario = await User.findOneAndUpdate({
            _id: existUser._id
        }, 
        { $set: user },
        { new: true }  
        )

        return usuario;    
    }
        
    const usuario = new User(user) 
    
    await usuario.save();

    return usuario;
}

module.exports = { createUserController }