const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Spot } = require('../../db/models');

const router = express.Router();

//val err
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

router.get('/', asyncHandler(async function (req, res) {
    const spots = await Spot.findAll(req.params.id)
    
    // {
    //     where: {
    //         userId = req.params.id
    //     }
    // }
    
    
    return res.json({spots});
}));

router.get('/users', asyncHandler(async function (req, res) {
    const users = await User.findAll(req.params.id)

    // {
    //     where: {
    //         userId = req.params.id
    //     }
    // }


    return res.json({ users });
}));



module.exports = router;