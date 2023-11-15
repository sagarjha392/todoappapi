import mongoose from "mongoose";

// Schema for database
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        
    },
    createdAt:{
        required: true,
        type:Date,
        default: Date.now,
    }
})


export const User = mongoose.model("User", schema);


