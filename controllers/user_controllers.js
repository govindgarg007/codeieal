const User = require('../models/user');


module.exports.home = function(request,response){
    if(request.cookies.user_id){
    return response.end('<h1> User home page</h1>')
    }else{
        return response.redirect('/user/signIn')
    }
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

// Sign In and create session
module.exports.createSession =async function(request,response){
    try{
        //find User
        const user = await User.findOne({email:request.body.email});

        //handle User found
        if(user){
        //handle password does not match
        if(user.password !=request.body.password){
            console.log("Password does not match");
            return response.redirect('back');
        }
        //handle session creation
        response.cookie('user_id',user.id);
        return response.redirect('/user/profile');

        }
        //handle User Not found
        else{
            console.log("user not found");
            return response.redirect('back');
        }



    }catch(err){
         // Handle any errors that occur
         console.log("Error in Signing In of user", err);
         return response.status(500).send("Internal Server Error");
    }
}