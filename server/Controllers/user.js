import { createError } from "../error.js";
import User from "../Models/User.js";

export const updateUser = async(req, res, next)=>{
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new:true});
            res.status(200).json(updatedUser)
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You can only update your acccount"));
    }
}
export const getUser = (req, res, next)=>{
    console.log("test is working")
}
export const deleteUser = (req, res, next)=>{
    console.log("test is working")
}
export const subscribeUser = (req, res, next)=>{
    console.log("test is working")
}
export const unsubscribeUser = (req, res, next)=>{
    console.log("test is working")
}
export const likeVideo = (req, res, next)=>{
    console.log("test is working")
}
export const dislikeVideo = (req, res, next)=>{
    console.log("test is working")
}
