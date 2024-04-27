const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

     const username = req.headers.username;
     const password = req.headers.password;
 
     const savedAdmin = await User.findOne({username : username});
 
     if(savedAdmin && savedAdmin.password === password) {
         next();
         return;
     }
 
     console.log(savedAdmin);
     res.send("Invalid credentials");
}

module.exports = userMiddleware;