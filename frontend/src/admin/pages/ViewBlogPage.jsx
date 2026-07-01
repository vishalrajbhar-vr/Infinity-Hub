import React, {
    useEffect,
    useState
} from "react";

import { useParams } from "react-router";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../../web/components/Footer";


function ViewBlogPage() {

    const { id } = useParams();

    const [blog, setBlog] = useState({});

    // FETCH SINGLE BLOG
    const viewsingleBlog = async () => {

        try {

            const res = await axios.get(
                `http://localhost:3000/viewblog/${id}`
            );

            console.log(res.data);

            setBlog(res.data.viewsBlogdetails);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {
        viewsingleBlog();
    }, []);

    return (
        <>
            <Header />

            <section className="bg-black min-h-screen text-white py-16">

                <div className="max-w-5xl mx-auto px-5">

                    {/* Image */}
                    <div className="w-full h-[500px]  overflow-hidden mb-4 rounded-3xl border border-yellow-200">

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Author + Date */}
                    <div className="grid lg:grid-cols-3 gap-5 text-zinc-400">

                        <p className="bg-yellow-300  text-center text-black px-4 py-2 rounded-xl  text-sm font-bold  ">
                            Author :
                            <span className="text-black ml-2">
                                {blog.author}
                            </span>
                        </p>

                        <p className="bg-yellow-300  text-center text-black px-4 py-2 rounded-xl  text-sm font-bold  ">
                            Date :
                            <span className="text-black ml-2">
                                {blog.date}
                            </span>
                        </p>


                        <span className="bg-yellow-300  text-center text-black px-4 py-2 rounded-xl  text-sm font-bold  ">
                            {blog.category}
                        </span>

                    </div>


                    {/* Title */}
                    <h1 className="text-5xl font-bold mt-6 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Tags */}
                    <div className="mt-10">

                        <h2 className="lg:text-3xl sm:text-xl font-bold mb-4">
                            Tags
                        </h2>

                        <span className=" px-4 py-2 rounded-xl text-sm text-black font-bold">
                            <div className="flex flex-wrap gap-2">
                                {blog.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-zinc-800 text-white text-xs px-4 py-2 rounded-xl"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </span>

                    </div>

                    {/* Short Description */}
                    <div className="mt-5">

                        <h2 className="lg:text-3xl sm:text-xl font-bold mb-4">
                            Short Description
                        </h2>

                        <p className="text-white leading-8">
                            {blog.shortDescription}
                        </p>

                    </div>

                    {/* Long Description */}
                    <div className="mt-10">

                        <h2 className="lg:text-3xl sm:text-xl font-bold mb-4">
                            Long Description
                        </h2>

                        <p className="text-white leading-8">
                            {blog.longDescription}
                        </p>

                    </div>



                </div>
            </section>

            <Footer />
        </>
    );
}

export default ViewBlogPage;