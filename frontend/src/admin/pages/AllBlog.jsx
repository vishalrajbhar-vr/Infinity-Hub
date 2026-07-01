import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    FaEdit,
    FaTrash,
    FaEye,
    FaPlus,
} from "react-icons/fa";

import { useNavigate } from "react-router";
import { getAllBlog, deleteBlog } from "../../service/blog";

const AllBlog = () => {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();

    const fetchBlog = async () => {
        try {
            const res = await getAllBlog();
            console.log(res);

            setBlog(res.data.allBlogs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    // -----------------------------------------Delete blog--------------------
    const handleDeleteblog = async (id) => {

        try {

            const res = await deleteBlog(id);

            console.log(res.data);

            // UI update
            setBlog(
                blog.filter((item) => item._id !== id)
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div>

                {/* Heading */}
                <div className="flex items-center justify-between mb-10">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            All Blogs
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all published blogs here.
                        </p>
                    </div>

                    {/* Add Blog Button */}
                    <button
                        onClick={() => navigate("/admin/add-blog")}
                        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                    >
                        <FaPlus />
                        Add Blog
                    </button>
                </div>

                {/* Blog Table */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* Table Head */}
                            <thead className="bg-zinc-800">
                                <tr>

                                    <th className="text-left text-white px-5 py-4">
                                        Image
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Title
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Category
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Author
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Date
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Tags
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {blog?.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                                    >

                                        {/* Image */}
                                        <td className="px-5 py-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-[90px] h-[60px] rounded-xl object-cover"
                                            />
                                        </td>

                                        {/* Title */}
                                        <td className="px-5 py-4">
                                            <h3 className="text-white font-semibold">
                                                {item.title}
                                            </h3>
                                        </td>

                                        {/* Category */}
                                        <td className="px-5 py-4">
                                            <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-medium">
                                                {item.category}
                                            </span>
                                        </td>

                                        {/* Author */}
                                        <td className="px-5 py-4 text-zinc-300">
                                            {item.author}
                                        </td>

                                        {/* Date */}
                                        <td className="px-5 py-4 text-zinc-400">
                                            {new Date(item.date).toLocaleDateString()}
                                        </td>

                                        {/* Tags */}
                                        <td className="px-5 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags?.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4">

                                            <div className="flex items-center gap-3">

                                                {/* View */}
                                                <button
                                                    onClick={() =>
                                                        navigate(`/admin/view-details/${item._id}`)
                                                    }
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white transition flex items-center justify-center"
                                                >
                                                    <FaEye />
                                                </button>

                                                {/* Edit */}
                                                <button
                                                    onClick={()=> navigate(`/admin/edit-blog/${item._id}`)}
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center"
                                                >
                                                    <FaEdit />
                                                </button>

                                                {/* Delete */}
                                                <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center" onClick={() => handleDeleteblog(item._id)}>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Empty State */}
                        {blog.length === 0 && (
                            <div className="py-20 text-center">
                                <h2 className="text-2xl text-zinc-400 font-semibold">
                                    No Blogs Found
                                </h2>

                                <p className="text-zinc-500 mt-3">
                                    Start by adding your first blog.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllBlog;