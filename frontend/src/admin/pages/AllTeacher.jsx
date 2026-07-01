import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    FaEdit,
    FaEye,
    FaPlus,
    FaTrash,
} from "react-icons/fa";

import { useNavigate } from "react-router";
import {
    getAllteacher, deleteTeacher
} from "../../service/teacher";

function AllTeacher() {

    const [teachers, setTeachers] = useState([]);

    const navigate = useNavigate();

    // ----------------------------- FETCH TEACHERS -----------------------------
    const fetchTeachers = async () => {

        try {

            const res = await getAllteacher();

            console.log(res.data);

            setTeachers(res.data.allTeacher);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    // Delete teacher
    const handleDeleteTeacher = async (id) => {

        try {

            const res = await deleteTeacher(id);

            console.log(res.data);

            // UI update
            setTeachers(
                teachers.filter((item) => item._id !== id)
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
                            All Teachers
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all teachers here.
                        </p>

                    </div>

                    {/* Add Teacher Button */}
                    <button
                        onClick={() =>
                            navigate("/admin/add-teacher")
                        }
                        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                    >

                        <FaPlus />
                        Add Teacher

                    </button>
                </div>

                {/* Table */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* Table Head */}
                            <thead className="bg-zinc-800">

                                <tr>

                                    <th className="text-left text-white px-5 py-4">
                                        Image
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Teacher Name
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Address
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Subject
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Qualification
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Actions
                                    </th>

                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>

                                {teachers?.length > 0 ? (

                                    teachers.map((item) => (

                                        <tr
                                            key={item._id}
                                            className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                                        >

                                            {/* Image */}
                                            <td className="px-5 py-4">

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-[90px] h-[60px] rounded-xl object-cover"
                                                />

                                            </td>

                                            {/* Teacher Name */}
                                            <td className="px-5 py-4 text-white font-semibold">
                                                {item.name}
                                            </td>

                                            {/* Address */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.address}
                                            </td>

                                            {/* Subject */}
                                            <td className="px-5 py-4">

                                                <span className="px-5 py-4 text-zinc-300">
                                                    {item.subject}
                                                </span>

                                            </td>

                                            {/* Qualification */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.qualification}
                                            </td>

                                            {/* Actions */}
                                            <td className="px-5 py-4">

                                                <div className="flex items-center gap-3">

                                                    {/* View */}
                                                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white transition flex items-center justify-center">

                                                        <FaEye />

                                                    </button>

                                                    {/* Edit */}
                                                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center">

                                                        <FaEdit />

                                                    </button>

                                                    {/* Delete */}
                                                    <button
                                                        onClick={() => handleDeleteTeacher(item._id)}
                                                        className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center"
                                                    >
                                                        <FaTrash />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>
                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="py-20 text-center"
                                        >

                                            <h2 className="text-2xl text-zinc-400 font-semibold">
                                                No Teachers Found
                                            </h2>

                                            <p className="text-zinc-500 mt-3">
                                                Start by adding your first teacher.
                                            </p>

                                        </td>

                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AllTeacher;