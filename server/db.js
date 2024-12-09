import mongoose from "mongoose";
export const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected To Database")
    }).catch((err)=>{throw err})
}
