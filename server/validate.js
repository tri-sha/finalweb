import {check,validationResult} from 'express-validator';

export const validateRegisterUser=()=>{
    check('email').isEmail().withMessage('Invalid mail!')
    .isEmpty().withMessage('User name can not be empty!'),
    check('firstname').isEmpty().withMessage("FirstName Can not be Empty"),
    check('password').isLength({ min: 8 })
    .withMessage('Password Must Be at Least 8 Characters')
    .matches('[0-9]').withMessage('Password Must Contain a Number')
    .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
    .matches('!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~\'\"').withMessage('Password Must Contain a special character'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
    }
  }

