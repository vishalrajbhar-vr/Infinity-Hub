// src/admin/pages/AddStudent.jsx

import React, { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addStudent } from "../../service/student";

const AddStudent = () => {

    // States
    const [studentName, setStudentName] = useState("");
    const [address, setAddress] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = async (e) => {

        e.preventDefault();

        // Prepare Data
        const studentData = {
            image,
            studentName,
            address,
            fatherName,
            motherName,
            dob,
            mobile,
            class: studentClass,
        };

        console.log(studentData);

        try {

            // API Call
            const res = await addStudent(studentData);

            console.log(res);

            toast.success(res.data.message);

            // Reset Form
            setStudentName("");
            setAddress("");
            setFatherName("");
            setMotherName("");
            setImage("");
            setDob("");
            setMobile("");
            setStudentClass("");

            // Navigate
            navigate("/admin/all-student");

        } catch (error) {

            console.log(error);

            toast.error("Student Not Added");
        }
    };

    return (
        <Layout>

            <div>

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Add New Student
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and add a new student.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Student Name */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Student Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Enter student name"
                                value={studentName}
                                onChange={(e) =>
                                    setStudentName(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Student Image URL
                            </label>

                            <input
                                type="text"
                                placeholder="Paste image URL"
                                value={image}
                                onChange={(e) =>
                                    setImage(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                            />
                        </div>

                        {/* Image Preview */}
                        {image && (
                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">
                                <img
                                    src={image}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}


                        {/* Address */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Address
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) =>
                                    setAddress(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400 resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Grid Fields */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Father Name */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Father Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter father name"
                                    value={fatherName}
                                    onChange={(e) =>
                                        setFatherName(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                            {/* Mother Name */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Mother Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter mother name"
                                    value={motherName}
                                    onChange={(e) =>
                                        setMotherName(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                            {/* DOB */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    DOB
                                </label>

                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) =>
                                        setDob(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                            {/* Mobile */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Mobile Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter mobile number"
                                    value={mobile}
                                    onChange={(e) =>
                                        setMobile(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                            {/* Class */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Class
                                </label>

                                <select
                                    value={studentClass}
                                    onChange={(e) =>
                                        setStudentClass(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                >

                                    <option value="">
                                        Select Class
                                    </option>

                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="5th">5th</option>
                                    <option value="6th">6th</option>
                                    <option value="7th">7th</option>
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                    <option value="10th">10th</option>

                                </select>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">

                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Add Student
                            </button>

                            <button
                                type="reset"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default AddStudent;