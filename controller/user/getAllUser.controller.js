const User = require("../../models/User");

const getAllUser = async () => {
   
    const user = await User.find({deleteUser: false});

    return user;
}

module.exports = { getAllUser }