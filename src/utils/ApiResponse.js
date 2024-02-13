class ApiResponse {
    // status code, data, message = "Success" 
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        // if the status code is less than 400, set the success property to true
        this.message = message
        // if the status code is less than 400, set the success property to true
        this.success = statusCode < 400 
    }
}

export { ApiResponse }