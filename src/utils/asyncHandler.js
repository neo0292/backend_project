// accepting async request function & returning its response ex. dbconnect function
const asyncHandler = (requestHandler) => {
  return (req,res,next) => {
  Promise.resolve(requestHandler(req, res, next))
  .catch((err) =>next(err));
}};

export { asyncHandler }