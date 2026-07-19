import React, {
    useEffect,
    useState
} from "react";

import { useParams } from "react-router";
import Footer from "../components/Footer";
import axios from "axios";
import Header from "../components/Header";

function BlogDetailesPage() {

    const { id } = useParams();

    const [blog, setBlog] = useState({});

    // FETCH SINGLE BLOG
    const fetchSingleBlog = async () => {
        try {
            const res = await axios.get(
                `https://infinity-hub-2.onrender.com/viewblog/${id}`
            );

            console.log(res.data);
            setBlog(res.data.singleBlog);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSingleBlog();
    }, []);

    return (
        <>
            <Header />

            <section className="bg-black min-h-screen text-white py-16">

                <div className="max-w-5xl mx-auto px-5">

                    {/* Image */}
                    <div className="w-full h-[500px] rounded-3xl overflow-hidden mb-10">

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Category */}
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {blog.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-5xl font-bold mt-6 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Author + Date */}
                    <div className="flex items-center gap-5 mt-5 text-zinc-400">

                        <p>
                            Author :
                            <span className="text-white ml-2">
                                {blog.author}
                            </span>
                        </p>

                        <p>
                            Date :
                            <span className="text-white ml-2">
                                {blog.date}
                            </span>
                        </p>

                    </div>

                    {/* Short Description */}
                    <div className="mt-10">

                        <h2 className="text-2xl font-bold mb-4">
                            Short Description
                        </h2>

                        <p className="text-zinc-300 leading-8">
                            {blog.shortDescription}
                        </p>

                    </div>

                    {/* Long Description */}
                    <div className="mt-10">

                        <h2 className="text-2xl font-bold mb-4">
                            Long Description
                        </h2>

                        <p className="text-zinc-300 leading-8">
                            {blog.longDescription}
                        </p>

                    </div>

                    {/* Tags */}
                    <div className="mt-10">

                        <h2 className="text-2xl font-bold mb-4">
                            Tags
                        </h2>

                        <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                            {blog.tags}
                        </span>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default BlogDetailesPage;