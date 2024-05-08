const z = require('zod');

const signUpSchema = z.object({
    username:z.string().email(),
    name: z.object({
        firstName : z.string(),
        lastName : z.string()
    }),
    password : z.string().min(8)
})

const signInSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8)
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


const signInValidation = (req,res,next) => {
    try {
        signInSchema.parse(req.body);
        next();
    } catch(err) {
        console.log(err);
        res.json({
            "msg" : "Invalid request body."
        })
    }
}

module.exports = {
    signUpValidation,
    signInValidation
}