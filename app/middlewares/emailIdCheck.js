const _ = require('lodash'),
    { Users } = require('../models');

module.exports = (req, res, next) => {
    Users.find({ email: _.get(req.body, 'email')}, (err, doc) => {
        if (err) {
            return res.json({
                err: 'Something went wrong',
                detail: err
            });
        }

        if (doc.length > 0) {
            return res.json({
                err: 'User already exists'
            });
        }

        return next();
    });
};
