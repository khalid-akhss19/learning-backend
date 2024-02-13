class ApiError extends Error {
    // 1. Define a constructor that takes in a status code, message, errors, and stack
    constructor( 
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        // 2. Call the super() method
        super(message)
        // 3. Set the statusCode, message, success, and errors properties
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        // 4. If the stack is provided, set the stack property
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}