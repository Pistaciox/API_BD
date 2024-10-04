const { User } = require('../models');

const getMe = async (params) => {
    const {id, baseUrl} = params;

    const user = await User.findOne({
        where:{
            id
        }
    });

    if(!user) throw new Error('User Not Found');

    if(user.photo){
        user.photo = `${baseUrl}/${user.photo}`;
    }

    return user;
}

const updateUser = async (params) => {
    const {id, username, email, photo} = params;

    const update = await User.update(
        {
            username,
            email,
            photo
        },
        {
            where:{
                id
            }
        });

    if(!update) throw new Error('Failed Updated User Data');

    const user = await User.findByPk(id);

    return user;
}

module.exports = {
    getMe,
    updateUser
}