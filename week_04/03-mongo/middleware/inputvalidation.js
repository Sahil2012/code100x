const z = require('zod');

const admin_schema = z.object({
    username:z.string().email(),
    password:z.string().min(8)
});

const checkInputSign = (req,res,next) => {

    const _body = req.body;

    try {
        admin_schema.parse(_body);
        next();
    }catch (err) {
        console.log(err);
        res.send('Invalid request body');
    }

}

module.exports = checkInputSign;