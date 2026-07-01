// src/pages/PageNotFound.jsx

import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-5">

            <div className="max-w-2xl w-full text-center">

                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold text-yellow-400 leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-zinc-500 text-lg leading-8 mt-6 max-w-xl mx-auto">
                    Sorry, the page you are looking for does not exist
                    or has been moved to another location.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-5 mt-10">

                    {/* Go Back */}
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-7 py-3 rounded-2xl transition border border-zinc-800"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>

                    {/* Home */}
                    <Link
                        to="/"
                        className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3 rounded-2xl transition"
                    >
                        Back To Home
                    </Link>
                </div>

                {/* Decorative Box */}
                <div className="mt-16 grid grid-cols-3 gap-4 opacity-20">
                    <div className="h-24 rounded-3xl bg-yellow-400"></div>
                    <div className="h-24 rounded-3xl bg-zinc-700"></div>
                    <div className="h-24 rounded-3xl bg-zinc-800"></div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;