const User = require("../../models/User");

const deleteUser = async ({_id}) => {
   
    await User.findOneAndUpdate(
        {_id},
        {
            $set: {
                deleteUser: true,
                deleteAt: new Date()
            }
        },
        {new: true}
    );

    return;
}

module.exports = { deleteUser }