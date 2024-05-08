const z = require('zod');

const signUpSchema = z.object({
    name: z.object({
        firstName : z.string(),
        lastName : z.string()
    }),
    password : z.string().min(8)
})

const signUpValidation = (req,res,next) => {
    try {
        signUpSchema.parse(req.body);
        next();
    } catch(err) {
        console.log(err);
        res.json({
            "msg" : "Invalid request body."
        })
    }
}

module.exports = {
    signUpValidation
}