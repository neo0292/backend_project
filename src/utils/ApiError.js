// to standardize api error responses we are extending Error class provided by NODE, 
// here we are creating constructor and overriding it  
class ApiError extends Error {
  constructor(
    statusCode,
    message = 'something went wrong',
    errors =[],
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

    if(stack){
      this.stack = stack
    }
    else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export { ApiError } 

