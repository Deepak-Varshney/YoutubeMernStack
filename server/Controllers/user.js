import { createError } from "../error.js";
import User from "../Models/User.js";
import Video from "../Models/Video.js";

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser)
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You can only update your acccount"));
    }
}
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted")
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You can only delete your acccount"));
    }
}
export const subscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id } // channel user id
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 },
        })
        res.status(200).json("Subscription Successfull")
    } catch (error) {
        next(error)
    }
}
export const unsubscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedUsers: req.params.id } // channel user id
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 },
        })
        res.status(200).json("Unsubscription Successfull")
    } catch (error) {
        next(error)
    }
}
export const likeVideo = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { likes: id },
            $pull: { dislikes: id }
        })
        res.status(200).json("The video has been liked")
    } catch (error) {
        next(error)
    }
}
export const dislikeVideo = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { dislikes: id },
            $pull: { likes: id }
        }).catch(error => console.error("MongoDB error:", error));
        res.status(200).json("The video has been disliked");
    } catch (error) {
        console.error("Error in dislikeVideo:", error);
        next(error);
    }    
}