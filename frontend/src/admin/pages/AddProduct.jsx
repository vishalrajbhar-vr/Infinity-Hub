import React, { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addProduct } from "../../service/product";

function AddProduct() {

    // States
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [stock, setStock] = useState("");
    const [offers, setOffers] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const productData = {
                title,
                image,
                price,
                rating,
                stock,
                offers,
                desc
            };
            const res = await addProduct(productData);

            console.log(res.data);



            toast.success("Product Added Successfully");

            // Reset Form
            setTitle("");
            setImage("");
            setPrice("");
            setRating("");
            setStock("");
            setOffers("");
            setDesc("");

            navigate("/admin/all-product");

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            <div>

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Add New Product
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and add a new product.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Product Title */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Product Title
                            </label>

                            <input
                                type="text"
                                placeholder="Enter product title"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                            />
                        </div>

                        {/* Product Description */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Product Description
                            </label>

                            <textarea
                                rows="6"
                                placeholder="Enter product description"
                                value={desc}
                                onChange={(e) =>
                                    setDesc(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Product Image URL */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Product Image URL
                            </label>

                            <input
                                type="text"
                                placeholder="Paste image URL"
                                value={image}
                                onChange={(e) =>
                                    setImage(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                            />
                        </div>

                        {/* Image Preview */}
                        {image && (
                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">

                                <img
                                    src={image}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Grid Fields */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Price */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter product price"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Rating */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Rating
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter product rating"
                                    value={rating}
                                    onChange={(e) =>
                                        setRating(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Stock */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Stock
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter product stock"
                                    value={stock}
                                    onChange={(e) =>
                                        setStock(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Offers */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Offers
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter offer details"
                                    value={offers}
                                    onChange={(e) =>
                                        setOffers(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">

                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Add Product
                            </button>

                            <button
                                type="button"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Reset
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;