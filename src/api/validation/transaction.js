const Joi = require('joi');
export default  {
    options: { flatten: true },
    body: {
        privateKey: Joi.string().required(),
        destination: Joi.string().required(),
        amount: Joi.string().required()
    }
}

