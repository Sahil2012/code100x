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

const updateUserSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(8).optional()
})

const transferSchema = z.object({
    to : z.string(),
    amount : z.number()
});

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

const updateUserValidation = (req,res,next) => {
    try {
        updateUserSchema.parse(req.body);
        next();
    } catch(err) {
        console.log(err);
        res.json({
            "msg" : "Invalid request body."
        })
    }
}

const transferBodyValidation = (req,res,next) => {
    try{
        transferSchema.parse(req.body);
        next();
    } catch(err) {
        console.log(err);
        res.json({
            'msg' : 'Invalid request body.'
        })
    }
}

module.exports = {
    signUpValidation,
    signInValidation,
    updateUserValidation,
    transferBodyValidation
}