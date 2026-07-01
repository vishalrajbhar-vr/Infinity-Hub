import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema(
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

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;