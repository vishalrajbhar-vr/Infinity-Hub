// src/admin/components/Sidebar.jsx

import React from "react";
import {
    FaTachometerAlt,
    FaBlog,
    FaPlus,
    FaSignOutAlt,
    FaDatabase,
} from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            key: "/admin/dashboard",
            icon: <FaTachometerAlt />,
            label: "Dashboard",
        },

              {
            key: "/admin/add-blog",
            icon: <FaPlus />,
            label: "Add Blog",
        },

        {
            key: "/admin/all-blogs",
            icon: <FaBlog />,
            label: "All Blogs",
        },

         {
            key: "/admin/add-student",
            icon:<IoMdPersonAdd />,
            label: "Add Student",
        },
         {
            key: "/admin/all-student",
            icon: <FaDatabase />,
            label: "All student",
        },
         {
            key: "/admin/add-product",
            icon: <FaPlus />,
            label: "Add Product",
        },
          {
            key: "/admin/all-product",
            icon: <FaDatabase />,
            label: "All Product",
        },
        {
            key: "/admin/add-teacher",
            icon:<IoMdPersonAdd />,
            label: "Add Teacher",
        },
         {
            key: "/admin/all-teacher",
            icon: <FaDatabase />,
            label: "All Teacher",
        },
         {
            key: "/admin/add-category",
            icon: <FaPlus />,
            label: "Add Category",
        },
          {
            key: "/admin/all-category",
            icon: <FaDatabase />,
            label: "All Category",
        },
      
    ];

    return (
        <aside className="w-[270px] min-h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between">

            {/* Top */}
            <div>

                {/* Logo */}
                <div className="p-6 border-b border-zinc-800">
                    <h1 className="text-3xl font-bold text-yellow-400">
                        Blogify
                    </h1>

                    <p className="text-zinc-500 mt-1 text-sm">
                        Admin Panel
                    </p>
                </div>

                {/* Menu */}
                <div className="p-4">

                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        onClick={({ key }) => navigate(key)}
                        className="custom-sidebar-menu"
                    />
                </div>
            </div>

            {/* Logout */}
            <div className="p-4 border-t border-zinc-800">
                <button className="w-full flex items-center gap-3 text-red-400 hover:bg-red-500 hover:text-white px-4 py-3 rounded-2xl transition font-semibold">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;