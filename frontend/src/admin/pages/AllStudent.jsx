// src/admin/pages/AllStudent.jsx

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    FaEdit,
    FaTrash,
    FaEye,
    FaPlus,
} from "react-icons/fa";

import { useNavigate } from "react-router";
import { getAllStudents, deleteStudent } from "../../service/student";

const AllStudent = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    // Fetch Students
    const fetchStudents = async () => {

        try {

            const res = await getAllStudents();

            console.log(res.data);

            setStudents(res.data.allStudents);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);





    // Delete Student
    const handleDeleteStudent = async (id) => {

        try {

            const res = await deleteStudent(id);

            console.log(res.data);

            // UI update
            setStudents(
                students.filter((item) => item._id !== id)
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
                            All Students
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all students here.
                        </p>
                    </div>

                    {/* Add Student Button */}
                    <button
                        onClick={() => navigate("/admin/add-student")}
                        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                    >
                        <FaPlus />
                        Add Student
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
                                        Student Name
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Address
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Father Name
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Mother Name
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        DOB
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Mobile
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Class
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>

                                {students?.length > 0 ? (
                                    students.map((item) => (

                                        <tr

                                            key={item._id}
                                            className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                                        >
                                            {/* Image */}
                                            <td className="px-5 py-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.studentName}
                                                    className="w-[90px] h-[60px] rounded-xl object-cover"
                                                />
                                            </td>

                                            {/* Student Name */}
                                            <td className="px-5 py-4 text-white font-semibold">
                                                {item.studentName}
                                            </td>

                                            {/* Address */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.address}
                                            </td>

                                            {/* Father Name */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.fatherName}
                                            </td>

                                            {/* Mother Name */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.motherName}
                                            </td>

                                            {/* DOB */}
                                            <td className="px-5 py-4 text-zinc-400">
                                                {
                                                    item.dob
                                                        ? new Date(item.dob).toLocaleDateString()
                                                        : "N/A"
                                                }
                                            </td>

                                            {/* Mobile */}
                                            <td className="px-5 py-4 text-zinc-300">
                                                {item.mobile}
                                            </td>

                                            {/* Class */}
                                            <td className="px-5 py-4">
                                                <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-medium">
                                                    {item.class}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-5 py-4">

                                                <div className="flex items-center gap-3">

                                                    {/* View */}
                                                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white transition flex items-center justify-center">
                                                        <FaEye />
                                                    </button>

                                                    {/* Edit */}
                                                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center" 
                                                     onClick={() =>
                                                        navigate(`/admin/edit-student/${item._id}`)
                                                    }
                                                    >
                                                        <FaEdit />
                                                    </button>

                                                    {/* Delete */}
                                                    <button className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center" onClick={() => handleDeleteStudent(item._id)}>
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="9"
                                            className="py-20 text-center"
                                        >

                                            <h2 className="text-2xl text-zinc-400 font-semibold">
                                                No Students Found
                                            </h2>

                                            <p className="text-zinc-500 mt-3">
                                                Start by adding your first student.
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
};

export default AllStudent;