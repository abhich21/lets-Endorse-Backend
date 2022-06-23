const express = require('express');
const User = require('../models/user.model');
const router = express.Router();


router.get("", async (req, res) => {

    try {
        const users = await User.find().lean().exec();
        const flattener = (obj = {}, res = {}, extra = '') => {
            for (let key in obj) {
                if (typeof obj[key] !== 'object' && typeof obj[key] !== 'function') {
                    res[extra + key] = typeof(obj[key]);

                } else {
                    if (key == 'id' || key == '__v' || key == 'createdAt' || key == 'updatedAt'|| key=='mobileNumber'|| key=='pincode') {
                        res[extra + key] = 'number';
                    }
                    flattener(obj[key], res, `${extra}${key}.`);
                };
            };
            return res;
        };
        res.status(200).send(flattener(users));
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);

    }

});

module.exports = router;
