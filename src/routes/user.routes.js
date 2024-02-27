import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser)
//hppt://localhost:5000/users/register // it will call the registerUser function from the user.controller.js file

export default router;