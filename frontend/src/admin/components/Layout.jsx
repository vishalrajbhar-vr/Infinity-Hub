// src/admin/components/Layout.jsx

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="flex bg-zinc-200 min-h-screen">

            {/* Sidebar */}
            <Sidebar />

            {/* Right Content */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <Header />

                {/* Page Content */}
                <main className="flex-1 p-8 bg-zinc-700">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;