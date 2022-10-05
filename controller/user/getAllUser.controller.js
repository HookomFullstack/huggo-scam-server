const User = require("../../models/User");

const getAllUser = async () => {
   
    const user = await User.find({});

    return user;
}

module.exports = { getAllUser }