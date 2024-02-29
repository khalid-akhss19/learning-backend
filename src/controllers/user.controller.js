import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res)=>{ 
    //get user deatail form frontend
    //validte data
    //check if user already exist: usernmae & email
    //chck for image/check for avator
    //upload them to cloudinary and get the url, avator
    //create user object -createentry in db
    //remove password and refresh token token from response
    //check for user cration
    //return response


    const { username, email, fullName, password } = req.body; // we get these from fronrend and it coems in json format in body, so we use req.body to get the data
    console.log("email: ", email)
});

export { registerUser }
