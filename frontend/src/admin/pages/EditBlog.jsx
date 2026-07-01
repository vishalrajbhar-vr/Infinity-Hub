// src/admin/pages/EditBlog.jsx

import React, {
    useEffect,
    useState
} from "react";

import Layout from "../components/Layout";

import toast from "react-hot-toast";

import {
    useNavigate,
    useParams
} from "react-router";

import {
    editBlog,
    getfeatchBlogDetails
} from "../../service/blog";

const EditBlog = () => {

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
    const { id } = useParams()

    const fetchBlogDetails = async(id) => {
        try {
            const res = await getfeatchBlogDetails(id)
            const details = res.data.blogDetails

            setTitle(details.title)
            setShortDescription(details.shortDescription)
            setLongDescription(details.longDescription)
            setImage(details.image)
            setDate(details.date?.split("T")[0])
            setAuthor(details.author)
            setCategory(details.category)
            setTags(details.tags.toString())
            
        } catch (error) {
            toast.error("Something went wrong.")
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogDetails(id)
    }, [])

    // ---------------- UPDATE BLOG ----------------
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

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
                    .map((tag) => tag.trim())
            };

            const res = await editBlog(id, blogData);

            console.log(res.data);

            toast.success(res.data.message);

            navigate("/admin/all-blogs");

        } catch (error) {

            console.log(error);

            toast.error("Blog update failed");
        }
    };

    return (

        <Layout>

            <div>

                {/* ---------------- HEADING ---------------- */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Edit Blog
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Update your blog details
                    </p>

                </div>

                {/* ---------------- FORM ---------------- */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                         onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* BLOG TITLE */}
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

                        {/* SHORT DESCRIPTION */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Short Description
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Enter short description"
                                value={shortDescription}
                                onChange={(e) =>
                                    setShortDescription(
                                        e.target.value
                                    )
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>

                        </div>

                        {/* LONG DESCRIPTION */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Long Description
                            </label>

                            <textarea
                                rows="8"
                                placeholder="Enter long description"
                                value={longDescription}
                                onChange={(e) =>
                                    setLongDescription(
                                        e.target.value
                                    )
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                            ></textarea>

                        </div>

                        {/* IMAGE URL */}
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

                        {/* IMAGE PREVIEW */}
                        {image && (

                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">

                                <img
                                    src={image}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        )}

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* DATE */}
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

                            {/* AUTHOR */}
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

                            {/* CATEGORY */}
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

                            {/* TAGS */}
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

                        {/* BUTTONS */}
                        <div className="flex items-center gap-4 pt-4">

                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Update Blog
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/admin/all-blogs")
                                }
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </Layout>
    );
};

export default EditBlog;