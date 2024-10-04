const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (params) => {
    const {username, email, password, photo} = params;

    const check = await User.findOne({
        where:{
            email
        }
    });

    if(check) throw new Error('Email has been registered');

    const hashedPassword = await bcrypt.hash(password, 10);

    const regis = await User.create({
        username,
        email,
        password: hashedPassword,
        photo
    });

    if(!regis) throw new Error('Register failed');

    return regis;
}

const login = async (params) => {
    const {email, password} = params;
    const user = await User.findOne({
        where:{
            email
        }
    });
    
    if(!user) throw new Error('Invalid Credentials');

    const valid = await bcrypt.compare(password, user.password);

    if(!valid) throw new Error('Invalid Credentials');

    const token = jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET, {expiresIn: '1h'});

    return {token};
}

module.exports = {
    register,
    login
}