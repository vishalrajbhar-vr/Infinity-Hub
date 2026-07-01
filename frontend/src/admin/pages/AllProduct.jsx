import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    FaEdit,
    FaTrash,
    FaEye,
    FaPlus,
} from "react-icons/fa";

import { useNavigate } from "react-router";

import { getAllProducts, deleteProduct } from "../../service/product";

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    // -------------------------------- FETCH PRODUCTS ------------------------------
    const fetchProducts = async () => {

        try {

            const res = await getAllProducts();

            console.log(res);

            setProducts(res.data.allProduct);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // -------------------------------- DELETE PRODUCT ------------------------------
    const handleDeleteProduct = async (id) => {

        try {

            const res = await deleteProduct(id);

            console.log(res.data);

            // UI Update
            setProducts(
                products.filter(
                    (item) => item._id !== id
                )
            );

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <Layout>

            <div>

                {/* Heading */}
                <div className="flex items-center justify-between mb-10">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            All Products
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all products here.
                        </p>
                    </div>

                    {/* Add Product Button */}
                    <button
                        onClick={() =>
                            navigate("/admin/add-product")
                        }
                        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                    >
                        <FaPlus />
                        Add Product
                    </button>
                </div>

                {/* Product Table */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* Table Head */}
                            <thead className="bg-zinc-800">
                                <tr>
                                    <th className="text-left text-white px-5 py-4">Image</th>
                                    <th className="text-left text-white px-5 py-4">Title</th>
                                    <th className="text-left text-white px-5 py-4">Price</th>
                                    <th className="text-left text-white px-5 py-4">Rating</th>
                                    <th className="text-left text-white px-5 py-4">Stock</th>
                                    <th className="text-left text-white px-5 py-4">Offers</th>
                                    <th className="text-left text-white px-5 py-4">Description</th>
                                    <th className="text-left text-white px-5 py-4">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {products?.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                                    >

                                        {/* Image */}
                                        <td className="px-5 py-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-[90px] h-[60px] rounded-xl object-cover"
                                            />
                                        </td>

                                        {/* Title */}
                                        <td className="px-5 py-4">
                                            <h3 className="text-white font-semibold">
                                                {item.title}
                                            </h3>
                                        </td>

                                        {/* Price */}
                                        <td className="px-5 py-4 text-zinc-300">
                                            ₹ {item.price}
                                        </td>

                                        {/* Rating */}
                                        <td className="px-5 py-4">
                                            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                                                {item.rating}
                                            </span>
                                        </td>

                                        {/* Stock */}
                                        <td className="px-5 py-4">
                                            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                                                {item.stock}
                                            </span>
                                        </td>

                                        {/* Offers */}
                                        <td className="px-5 py-4">
                                            <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-medium">
                                                {item.offers}
                                            </span>
                                        </td>

                                        {/* Description */}
                                        <td className="px-5 py-4 text-zinc-400 max-w-[250px]">
                                            {item.desc}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white transition flex items-center justify-center">
                                                    <FaEye />
                                                </button>

                                                <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center">
                                                    <FaEdit />
                                                </button>

                                                <button
                                                    onClick={() => handleDeleteProduct(item._id)}
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center"
                                                >
                                                    <FaTrash />
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        {/* Empty State */}
                        {products?.length === 0 && (
                            <div className="py-20 text-center">
                                <h2 className="text-2xl text-zinc-400 font-semibold">
                                    No Products Found
                                </h2>
                                <p className="text-zinc-500 mt-3">
                                    Start by adding your first product.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllProduct;