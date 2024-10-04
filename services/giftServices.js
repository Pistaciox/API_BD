const { Gift } = require('../models');

const createGift = async (params) => {
    const {user_id, varian} = params;
    const gift = await Gift.create({
        user_id: user_id,
        varian: varian
    });

    if(!gift) throw new Error('Failed create gift');

    return gift;
}

module.exports = {
    createGift
}