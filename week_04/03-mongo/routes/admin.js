const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const checkInputSign = require("../middleware/inputvalidation");
const {Admin, Course} = require("../db/index");
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

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const newCourse = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imagelink: req.body.imagelink
    });

    const savedCourse = await newCourse.save();
    res.json({
        "message" : "Course created sucessfully",
        "courseId" : savedCourse.id
    });
});

router.get('/courses', adminMiddleware,async (req, res) => {
    
    const allCourses = await Course.find();

    res.json(allCourses);
});

module.exports = router;