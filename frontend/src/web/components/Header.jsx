import React from "react";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router";


const Header = () => {
    return (
        <header className="w-full bg-black border-b border-zinc-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center text-lg">
                        <FaPenNib />
                    </div>

                    <div>
                        <h1 className="text-white text-2xl font-bold tracking-wide">
                           Infinity Hub
                        </h1>
                        <p className="text-zinc-400 text-xs">
                            Read. Learn. Grow.
                        </p>
                    </div>
                </div>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="/"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Home
                    </a>

                    <a
                        href="#blogs"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Blogs
                    </a>

                    <a
                        href="#student"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Students
                    </a>

                    <a
                        href="#product"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Product
                    </a>
                    <a
                        href="#teacher"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Teacher
                    </a>
                    <a
                        href="#category"
                        className="text-zinc-300 hover:text-yellow-400 transition"
                    >
                        Category
                    </a>
                </nav>

                {/* Button */}
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-xl transition">

                    <Link to="#">
                        Admin
                    </Link>
                </button>
            </div>
        </header>
    );
};

export default Header;