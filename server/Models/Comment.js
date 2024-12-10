import mongoose, {Schema} from "mongoose";

const CommentSchema = new Schema({
    userId:{
        type:String,
        required: true,
    },
    videoId:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required: true,
    }
},{timestamps:true})
const Comment = mongoose.models.COmment || mongoose.model("Comment", CommentSchema);

export default Comment;