const giftService = require('../services/giftServices');
const userService = require('../services/userServices');
const emailService = require('../services/emailServices');

const createGift = async (req, res, next) => {
    try {
        // Ambil data user yang login berdasarkan token
        const paramsUser = {
            id: req.user.id, // Dapatkan ID user dari token yang didecode
            baseUrl: req.protocol + '://' + req.get('host') // Base URL untuk foto jika ada
        };
        
        // Panggil getMe untuk mendapatkan data user
        const user = await userService.getMe(paramsUser);

        // Siapkan parameter untuk createGift
        let paramsGift = {
            user_id: req.user.id,
            varian: req.body.varian
        }

        // Create Gift
        const response = await giftService.createGift(paramsGift);

        // Kirim email setelah hadiah berhasil dibuat
        await emailService.sendGiftEmail(user.email, response.varian); // Kirim email ke email user

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createGift
};
