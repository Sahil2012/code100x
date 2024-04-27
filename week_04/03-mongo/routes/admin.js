const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const checkInputSign = require("../middleware/inputvalidation");
const {Admin} = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup',checkInputSign, async (req, res) => {
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password
    });

    const savedAdmin = await newAdmin.save();

    console.log(savedAdmin);

    res.send("Admin Registered Successfully.")
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;