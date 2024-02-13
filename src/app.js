import express from "express"
import cors from "cors"; // Cross Origin Resource Sharing 
import cookieParser from "cookie-parser"; // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

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


export {app}