const User = require('../models/user');


module.exports.home = function(request,response){
    return response.end('<h1> User home page</h1>')
}

module.exports.signUp = function(request,response){
    return response.render('user_sign_up'); 
}

module.exports.signIn = function(request,response){
    return response.render('user_sign_in');
}

module.exports.create = async function(request, response) {
    try {
        // Check if passwords match
        if (request.body.password !== request.body.confirm_password) {
            return response.redirect('back');
        }

        // Find a user by email
        const user = await User.findOne({ email: request.body.email });

        if (!user) {
            // Create a new user if none is found
            await User.create(request.body);
            console.log("User created");
            return response.redirect('/user/signIn');
        } else {
            // Redirect back if the user already exists
            return response.redirect('back');
        }
    } catch (err) {
        // Handle any errors that occur
        console.log("Error in finding or creating user in sign up:", err);
        return response.status(500).send("Internal Server Error");
    }
};


module.exports.createSession =function(request,response){
    
}