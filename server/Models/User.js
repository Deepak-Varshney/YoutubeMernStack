import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    img:{
        type:String,
    },
    subscribers:{
        type:Number,
        default: 0
    },
    subscribedUsers:{
        type:[String],
    }
},{timestamps:true})

export default mongoose.model("User", UserSchema)