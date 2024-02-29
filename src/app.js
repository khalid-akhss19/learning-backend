import express from "express"
import cors from "cors"; // Cross Origin Resource Sharing 
import cookieParser from "cookie-parser"; // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
console.log("running app.js")
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//handle cookiees url files
app.use(express.json()); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.static('public')) // Serve static files

app.use(cookieParser(process.env.COOKIE_SECRET)) // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.  


//routes import
import userRouter from './routes/user.routes.js' // import the userRouter from the user.routes.js file

//routes declaration
app.use("/api/v1/users", userRouter) // use the userRouter for the /users route

//best practice usecase
// app.post("/user", (req, res) => {
//     console.log("hitted")
//     res.status(200).json({ message: "OK" });
// }) // use the userRouter for the /users route

export {app}