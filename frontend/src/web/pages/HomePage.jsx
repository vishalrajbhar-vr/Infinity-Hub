// src/pages/HomePage.jsx

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import { getAllBlog } from "../../service/blog";
import { getAllStudents } from "../../service/student";
import { getAllProducts } from "../../service/product";
import { getAllteacher } from "../../service/teacher";
import { getAllCategory } from "../../service/category";
import {
    useNavigate,
    useParams
} from "react-router";




const HomePage = () => {

    //------------------------------------------------------------blogs------------------------------------------
    const [blogs, setBlogs] = useState([]);
    let fetchBlog = async () => {
        try {
            let res = await getAllBlog();
            setBlogs(res.data.allBlogs)
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();
    const { id } = useParams();

    //------------------------------------------------------student-----------------------------------------------------
    const [students, setStudents] = useState([]);
    const fetchStudents = async () => {
        try {

            const res = await getAllStudents();

            console.log(res);

            setStudents(res.data.allStudents);

        } catch (error) {
            console.log(error);
        }
    };



    //------------------------------------------------------product-----------------------------------------------------
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {

            const res = await getAllProducts();

            console.log(res);

            setProducts(res.data.allProduct);

        } catch (error) {
            console.log(error);
        }
    };

    //------------------------------------------------------teacher-----------------------------------------------------
    const [teacher, setTeacher] = useState([]);
    const fetchTeacher = async () => {
        try {

            const res = await getAllteacher();

            console.log(res);

            setTeacher(res.data.allTeacher);

        } catch (error) {
            console.log(error);
        }
    };

    //------------------------------------------------------teacher-----------------------------------------------------
    const [category, setCategory] = useState([]);
    const fetchCategory = async () => {
        try {

            const res = await getAllCategory();

            console.log(res);

            setCategory(res.data.allCategory);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlog();
        fetchStudents();
        fetchProducts();
        fetchTeacher();
        fetchCategory();
    }, []);

    return (
        <div className="bg-black min-h-screen">

            <Header />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-5 pt-16 pb-10">
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Discover Infinity  <span className="text-yellow-400">Hub</span>
                    </h1>

                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
                        Discover a world of endless knowledge, innovative ideas, and inspiring content.
                        Explore blogs, expert tutorials, product insights, and learning resources—all in one Infinity Hub.
                    </p>

                    <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3 rounded-2xl transition inline-flex items-center gap-2">
                        Explor Infinity Hub
                        <FaArrowRight />
                    </button>
                </div>
            </section>

            {/* ------------------------------------------------Blog Listing section------------------------------------------- */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                <div id="blogs" className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2 text-3xl font-bold text-white border-b border-yellow-500 pb-2">
                        <h2> Latest Blogs</h2>
                        <FaArrowRight />
                    </div>

                    <button className=" bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-2xl transition inline-flex items-center">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-white text-xl font-semibold leading-8">
                                    {blog.title}
                                </h3>

                                <p className="text-zinc-400 mt-3 leading-7">
                                    {blog.shortDescription}
                                </p>

                                <button className="mt-5 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2"
                                    onClick={() =>
                                        navigate(`/admin/view-details/${blog._id}`)}
                                >
                                    Read More
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* -------------------------------------------------------Student Listing section---------------------------------------------- */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                <div id="student" className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2 text-3xl font-bold text-white border-b border-yellow-500 pb-2">
                        <h2>Student</h2>
                        <FaArrowRight />
                    </div>

                    <button className=" bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-2xl transition inline-flex items-center">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {students.map((student) => (
                        <div
                            key={student._id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >
                            {/* Student Image */}
                            <img
                                src={student.image}
                                alt={student.studentName}
                                className="w-full h-56 object-cover"
                            />
                            {/* Top Section */}
                            <div className="bg-yellow-400 text-black p-5">

                                <h3 className="text-2xl font-bold">
                                    {student.studentName}
                                </h3>

                                <p className="font-medium">
                                    Class : {student.class}
                                </p>
                            </div>

                            {/* Student Details */}
                            <div className="p-5 space-y-4">

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Father Name
                                    </h4>

                                    <p className="text-white font-medium">
                                        {student.fatherName}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Mother Name
                                    </h4>

                                    <p className="text-white font-medium">
                                        {student.motherName}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Mobile
                                    </h4>

                                    <p className="text-white font-medium">
                                        {student.mobile}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        DOB
                                    </h4>

                                    <p className="text-white font-medium">
                                        {new Date(student.dob).toLocaleDateString()}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Address
                                    </h4>

                                    <p className="text-zinc-300 leading-7">
                                        {student.address}
                                    </p>
                                </div>

                                <button className="mt-1 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    View Details
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* -------------------------------------product listing section--------------------------- */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                <div id="product" className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2 text-3xl font-bold text-white border-b border-yellow-500 pb-2">
                        <h2> Latest Product</h2>
                        <FaArrowRight />
                    </div>

                    <button className=" bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-2xl transition inline-flex items-center">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >
                            {/* product Image */}
                            <img
                                src={product.image}
                                alt={product.productImage}
                                className="w-full h-56 object-cover"
                            />
                            {/* Top Section */}
                            <div className="bg-yellow-400 text-black p-5">

                                <h3 className="text-2xl font-bold">
                                    {product.title}
                                </h3>

                                <p className="font-medium">
                                    price : {product.price}
                                </p>
                            </div>


                            <div className="p-5 space-y-4">

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Rating
                                    </h4>

                                    <p className="text-white font-medium">
                                        {product.rating}/5
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Stock
                                    </h4>

                                    <p className="text-white font-medium">
                                        {product.stock}/100
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Offer
                                    </h4>

                                    <p className="text-white font-medium">
                                        {product.offer}%off
                                    </p>
                                </div>

                                {/* Description */}
                                <div>

                                    <h4 className="text-zinc-400 text-sm">
                                        Description
                                    </h4>

                                    <p className="text-zinc-300 leading-7">
                                        {product.description}
                                    </p>

                                </div>

                                <button className="mt-1 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    View Details
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* -------------------------------------teacher listing section--------------------------- */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                <div id="teacher" className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2 text-3xl font-bold text-white border-b border-yellow-500 pb-2">
                        <h2> Teachers</h2>
                        <FaArrowRight />
                    </div>

                    <button className=" bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-2xl transition inline-flex items-center">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {teacher.map((teacher) => (
                        <div
                            key={teacher._id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >
                            {/* teacher Image */}
                            <img
                                src={teacher.image}
                                alt={teacher.teacherImage}
                                className="w-full h-56 object-cover"
                            />
                            {/* Top Section */}
                            <div className="bg-yellow-400 text-black p-5">

                                <h3 className="text-2xl font-bold">
                                    {teacher.name}
                                </h3>

                            </div>


                            <div className="p-5 space-y-4">

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Address
                                    </h4>

                                    <p className="text-white font-medium">
                                        {teacher.address}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Subject
                                    </h4>

                                    <p className="text-white font-medium">
                                        {teacher.subject}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-zinc-400 text-sm">
                                        Qualification
                                    </h4>

                                    <p className="text-white font-medium">
                                        {teacher.qualification}
                                    </p>
                                </div>

                                <button className="mt-1 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    View Details
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* ------------------------------------- Category Listing Section --------------------------- */}
            <section className="max-w-7xl mx-auto px-5 py-10">

                {/* Heading */}
                <div id="category" className="flex items-center justify-between mb-10"  >
                    <div className="flex items-center gap-2 text-3xl font-bold text-white border-b border-yellow-500 pb-2">
                        <h2> Category</h2>
                        <FaArrowRight />
                    </div>
                    <button className=" bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-2xl transition inline-flex items-center">
                        View All
                    </button>
                </div>

                {/* Category Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {category.map((category) => (
                        <div key={category._id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >

                            {/* Category Image */}
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Top Section */}
                            <div className="bg-yellow-400 text-black p-5">

                                <h3 className="text-2xl font-bold line-clamp-1">
                                    {category.title}
                                </h3>

                                <p className="font-medium mt-1">
                                    Price : ₹ {category.price}
                                </p>

                            </div>

                            {/* Details */}
                            <div className="p-5 space-y-4">

                                {/* Rating */}
                                <div>

                                    <h4 className="text-zinc-400 text-sm">
                                        Rating
                                    </h4>

                                    <p className="text-white font-medium">
                                        ⭐ {category.rating}/5
                                    </p>

                                </div>

                                {/* Stock */}
                                <div>

                                    <h4 className="text-zinc-400 text-sm">
                                        Stock
                                    </h4>

                                    <p className="text-white font-medium">
                                        {category.stock}
                                    </p>

                                </div>

                                {/* Offers */}
                                <div>

                                    <h4 className="text-zinc-400 text-sm">
                                        Offer
                                    </h4>

                                    <p className="text-green-400 font-medium">
                                        {category.offers}
                                    </p>

                                </div>

                                {/* Description */}
                                <div>

                                    <h4 className="text-zinc-400 text-sm">
                                        Description
                                    </h4>

                                    <p className="text-zinc-300 leading-7 line-clamp-3">
                                        {category.desc}
                                    </p>

                                </div>

                                {/* Button */}
                                <button className="mt-2 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    View Details
                                    <FaArrowRight className="text-sm" />
                                </button>

                            </div>

                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default HomePage;