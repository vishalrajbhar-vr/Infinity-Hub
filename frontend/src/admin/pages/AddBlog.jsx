// src/admin/pages/AddBlog.jsx

import React, { useState } from "react";
import Layout from "../components/Layout";
import { addBlog } from "../../service/blog";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddBlog = () => {

    // States
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");

    const navigate = useNavigate()

    // Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare Data
        const blogData = {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,

            tags: tags
                .split(",")
                .map((tag) => tag.trim()),
        };

         console.log(blogData);

        try {
            const res = await addBlog(blogData);

            // console.log(res);

            toast.success(res.data.message)

            // Reset Form
            setTitle("");
            setShortDescription("");
            setLongDescription("");
            setImage("");
            setDate("");
            setAuthor("");
            setCategory("");
            setTags("");

            navigate('/admin/all-blogs')

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div>

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Add New Blog
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and publish a new blog.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Blog Title */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Blog Title
                            </label>

                            <input
                                type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                            />
                        </div>

                        {/* Short Description */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Short Description
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Enter short description"
                                value={shortDescription}
                                onChange={(e) =>
                                    setShortDescription(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Long Description */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Long Description
                            </label>

                            <textarea
                                rows="8"
                                placeholder="Enter long description"
                                value={longDescription}
                                onChange={(e) =>
                                    setLongDescription(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Blog Image URL
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

                            {/* Date */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Date
                                </label>

                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) =>
                                        setDate(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Author */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Author
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter author name"
                                    value={author}
                                    onChange={(e) =>
                                        setAuthor(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Category
                                </label>

                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                >
                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="React">
                                        React
                                    </option>

                                    <option value="MongoDB">
                                        MongoDB
                                    </option>

                                    <option value="JavaScript">
                                        JavaScript
                                    </option>

                                    <option value="Tailwind CSS">
                                        Tailwind CSS
                                    </option>
                                </select>
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Tags
                                </label>

                                <input
                                    type="text"
                                    placeholder="React, Frontend, JS"
                                    value={tags}
                                    onChange={(e) =>
                                        setTags(e.target.value)
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
                                Publish Blog
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
};

export default AddBlog;