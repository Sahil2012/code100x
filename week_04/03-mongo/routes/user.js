const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const checkInputSign = require("../middleware/inputvalidation");
const {User} = require("../db/index");

// User Routes
router.post('/signup', checkInputSign,async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    const savedUser  = await newUser.save();

    console.log(savedUser);

    res.send("User Registered Sucessfully.")
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router