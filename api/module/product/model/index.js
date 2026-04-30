import mongoose, { Types } from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
})

export const ProductModel = mongoose.model("expenceTracker", productSchema)