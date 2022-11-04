const User = require("../../models/User");

const deleteAllBank = async ({bank}) => {
   
    await User.deleteMany({name: bank});

    return;
}

module.exports = { deleteAllBank }