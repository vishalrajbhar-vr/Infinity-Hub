import React from "react";
import Layout from "../components/Layout";
import {
  FaBlog,
  FaFolderOpen,
  FaHeart,
  FaEye,
  FaCheckCircle,
  FaServer,
  FaDatabase,
  FaUserShield,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back! Here's an overview of your website.
          </p>
        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            👋 Welcome Back, Admin
          </h2>

          <p className="text-black/80 mt-3 text-lg">
            Manage blogs, categories, teachers and products from one powerful
            dashboard.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 transition">
            <FaBlog className="text-4xl text-yellow-400" />
            <h3 className="text-zinc-400 mt-4">Total Blogs</h3>
            <h1 className="text-5xl font-bold text-white mt-2">24</h1>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 transition">
            <FaFolderOpen className="text-4xl text-yellow-400" />
            <h3 className="text-zinc-400 mt-4">Categories</h3>
            <h1 className="text-5xl font-bold text-white mt-2">8</h1>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 transition">
            <FaHeart className="text-4xl text-yellow-400" />
            <h3 className="text-zinc-400 mt-4">Total Likes</h3>
            <h1 className="text-5xl font-bold text-white mt-2">1.2K</h1>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 transition">
            <FaEye className="text-4xl text-yellow-400" />
            <h3 className="text-zinc-400 mt-4">Views</h3>
            <h1 className="text-5xl font-bold text-white mt-2">12K</h1>
          </div>

        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Website Overview */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold text-white mb-6">
              Website Overview
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Published Blogs</span>
                <span className="text-white font-semibold">20</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Draft Blogs</span>
                <span className="text-white font-semibold">4</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Products</span>
                <span className="text-white font-semibold">18</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Teachers</span>
                <span className="text-white font-semibold">12</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">Categories</span>
                <span className="text-white font-semibold">8</span>
              </div>

            </div>

          </div>

          {/* System Status */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold text-white mb-6">
              System Status
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaDatabase className="text-green-400 text-xl" />
                <span className="text-white">Database Connected</span>
              </div>

              <div className="flex items-center gap-4">
                <FaServer className="text-green-400 text-xl" />
                <span className="text-white">Server Running</span>
              </div>

              <div className="flex items-center gap-4">
                <FaUserShield className="text-green-400 text-xl" />
                <span className="text-white">Admin Authenticated</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-xl" />
                <span className="text-white">REST API Active</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Today's Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold text-white mb-6">
              Today's Summary
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">2</h3>
                <p className="text-zinc-400 mt-1">Blogs Published</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">350</h3>
                <p className="text-zinc-400 mt-1">Views Today</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">28</h3>
                <p className="text-zinc-400 mt-1">Likes Today</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">5</h3>
                <p className="text-zinc-400 mt-1">New Comments</p>
              </div>

            </div>

          </div>

          {/* Quote */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center">

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                💡 Daily Inspiration
              </h2>

              <p className="text-zinc-300 text-lg leading-8 italic">
                "Success doesn't come from what you do occasionally. It comes
                from what you do consistently."
              </p>

            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;