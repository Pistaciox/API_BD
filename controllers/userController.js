const userService = require('../services/userServices');

const getMe = async (req, res, next) => {
    try{
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        const params = {
            id:req.user?.id,
            baseUrl
        };

        const response = await userService.getMe(params);
        res.status(200).json(response);

    }catch(error){
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try{
        let userData = {
            ...req.body,
            id:req.user.id,
            photo: req.file ? req.file.path.replace(/\\/g, '/') :null
        };

        const user = await userService.updateUser(userData);
        user.photo = `${req.protocol}://${req.get('host')}/${user.photo}`;
        
        res.status(201).json(user);

    }catch(error){
        next(error);
    }
}

module.exports = {
    getMe,
    updateUser
}