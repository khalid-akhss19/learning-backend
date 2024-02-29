import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User} from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) => {
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
  console.log("email: ", email);

  //validate data we chck for validations

  // if (fullName === "" ) {
  //     throw ApiError(400, "fullName is required")
  // }

  //now check for validation and use some method to check if any of the field is empty and then trim the field and check and throw error
  if ([fullName, email, username, password].some((fld) => fld?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid email format");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
   
})

if (existedUser) {
    throw new ApiError(409, "User with email or username already exists")
}
});






export { registerUser };
