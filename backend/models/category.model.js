import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: String,
            required: true
        },

        rating: {
            type: String,
            required: true
        },

        stock: {
            type: Number,
            required: true
        },

        offers: {
            type: String,
            required: true
        },

        desc: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const CategoryModel = mongoose.model("category", CategorySchema);

export default CategoryModel;