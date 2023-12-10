//express does not give response calass so we are creating response class with constructor for streamline our response from server 
class ApiResponse {
  constructor(statusCode,data,message='Success'){
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400
  }
}