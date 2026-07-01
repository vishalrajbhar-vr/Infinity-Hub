import React, { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addCategory } from "../../service/category";

function AddCategory() {

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

            const categoryData = {
                title,
                image,
                price,
                rating,
                stock,
                offers,
                desc
            };

            const res = await addCategory(categoryData);

            console.log(res.data);

            toast.success("Category Added Successfully");

            // Reset Form
            setTitle("");
            setImage("");
            setPrice("");
            setRating("");
            setStock("");
            setOffers("");
            setDesc("");

            navigate("/admin/all-category");

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
                        Add New Category
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and add a new category.
                    </p>

                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Category Title */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Category Title
                            </label>

                            <input
                                type="text"
                                placeholder="Enter category title"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                            />

                        </div>

                        {/* Category Description */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Category Description
                            </label>

                            <textarea
                                rows="6"
                                placeholder="Enter category description"
                                value={desc}
                                onChange={(e) =>
                                    setDesc(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>

                        </div>

                        {/* Category Image URL */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Category Image URL
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
                                    placeholder="Enter category price"
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
                                    placeholder="Enter category rating"
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
                                    type="number"
                                    placeholder="Enter category stock"
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
                                Add Category
                            </button>

                            <button
                                type="reset"
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

export default AddCategory;