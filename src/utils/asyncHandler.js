// 2nd way by promises 
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler}


// higher order function async hadnler higher order function hai so wo function jo function ko as a paramerter bhi accept kr sakte h ya return bhi kr sakte h as a vairable ki trh treat krte h 


// const asyncHandler = () => {} 
// const asyncHandler = (fn) => {} 
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => {() => {}}


// this is the first way 
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message 
//         })
//     }
// }