// src/admin/components/Header.jsx

import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full h-[80px] bg-zinc-700 border-b border-zinc-800 px-8 flex items-center justify-between">

            {/* Left */}
            <div>
                <h2 className="text-2xl font-bold text-white">
                    Dashboard
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                    Welcome back Admin 👋
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                {/* Notification */}
                <button className="w-11 h-11 rounded-2xl bg-zinc-900 text-zinc-300 hover:text-yellow-400 transition flex items-center justify-center text-lg">
                    <FaBell />
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-2xl">
                    <FaUserCircle className="text-3xl text-green-400" />

                    <div>
                        <h4 className="text-white text-sm font-semibold">
                            Admin
                        </h4>

                        <p className="text-zinc-500 text-xs">
                            Super Admin
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;