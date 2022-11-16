const User = require("../../models/User");

const deleteAllBank = async ({bank}) => {
   
    await User.updateMany({name: bank}, 
        { 
            $set: {
                deleteUser: true,
                deleteAt: new Date()
            }
        },
        { new: true } 
        );

    return;
}

module.exports = { deleteAllBank }