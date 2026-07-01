// src/components/Footer.jsx

import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-800 ">
            <div className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                         Infinity Hub
                    </h2>

                    <p className="text-zinc-400 leading-7">
                        A modern platform where users can read
                        quality content and explore knowledge in simple
                        language.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3">
                        <a
                            href="/"
                            className="text-zinc-400 hover:text-yellow-400 transition"
                        >
                            Home
                        </a>

                        <a
                            href="/blogs"
                            className="text-zinc-400 hover:text-yellow-400 transition"
                        >
                            Blogs
                        </a>

                        <a
                            href="/about"
                            className="text-zinc-400 hover:text-yellow-400 transition"
                        >
                            About
                        </a>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Follow Us
                    </h3>

                    <div className="flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-zinc-900 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-white cursor-pointer">
                            <FaFacebookF />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-zinc-900 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-white cursor-pointer">
                            <FaInstagram />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-zinc-900 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-white cursor-pointer">
                            <FaTwitter />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-zinc-900 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center text-white cursor-pointer">
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-zinc-800 py-5 text-center text-zinc-500 text-sm">
                © 2026 Blogify. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;