const User = require("../../models/User");

const deleteAllBank = async ({bank}) => {
   
    await User.deleteMany({})

    return;
}

module.exports = { deleteAllBank }