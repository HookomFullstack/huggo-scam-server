const User = require("../../models/User");

const deleteAllBank = async ({bank}) => {
   
    await User.updateMany({name: bank}, 
        { 
            $set: {
                deleteUser: false,
                deleteAt: new Date()
            }
        },
        { new: true } 
        );

    return;
}

module.exports = { deleteAllBank }