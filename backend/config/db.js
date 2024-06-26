import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rhythmr3:050802@cluster0.hn7p3oe.mongodb.net/zwiggato').then(()=>console.log("DB Connected"));
}