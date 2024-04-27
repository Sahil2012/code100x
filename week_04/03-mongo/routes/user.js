const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const checkInputSign = require("../middleware/inputvalidation");
const {User, Course} = require("../db/index");

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

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find();

    res.json(allCourses);
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const course = await Course.findOne({_id : req.params.courseId});

    if(course) {
        const user = await User.updateOne({username: req.headers.username},{$push:{purchasedCourses:course.id}});
        console.log(user);
        res.json({
            "message":"Course purchased successfully"
        });
        return;
    }
    
    res.json({
        "message" : "Course unavailable"
    })

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    
    const user = await User.findOne({username : req.headers.username});
    console.log(user.purchasedCourses);

    const courses = await Course.find({_id : {$in:user.purchasedCourses}});

    if(courses) {
        res.json(courses);
        return;
    }

    res.json({
        "message" : "No courses yet"
    })
});

module.exports = router