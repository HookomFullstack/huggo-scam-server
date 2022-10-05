const User = require("../../models/User");

const deleteUser = async ({_id}) => {
   
    await User.findByIdAndRemove({_id});

    return;
}

module.exports = { deleteUser }