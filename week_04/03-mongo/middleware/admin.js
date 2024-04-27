// Middleware for handling auth

const z = require('zod');

const admin_schema = z.object({
    username:z.string().email(),
    password:z.string().min(8)
});

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

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

module.exports = adminMiddleware;