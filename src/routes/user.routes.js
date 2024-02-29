import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"


const router = Router();

router.route("/register").post(
    //for file uplaod we use upload.fields, it takesmultiple arguments, and we pass an array of objects, each object has a name and maxCount property
    upload.fields([
        {
            name: "avatar", // name of the field in the form should be same as fronetend
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )



//https://localhost:5000//api/v1/users/register // it will call the registerUser function from the user.controller.js file

export default router;