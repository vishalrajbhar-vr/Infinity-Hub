import React, { useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addTeacher } from "../../service/teacher";

function AddTeacher() {

    // States
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [qualification, setQualification] = useState("");

    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const teacherData = {
                name,
                image,
                address,
                subject,
                qualification
            };

            console.log(teacherData);

            // API Call
            const res = await addTeacher(teacherData);

            console.log(res);

            toast.success(res.data.message);

            // Reset Form
            setName("");
            setImage("");
            setAddress("");
            setSubject("");
            setQualification("");

            // Navigate
            navigate("/admin/all-teacher");

        } catch (error) {

            console.log(error);

            toast.error("Teacher Not Added");
        }
    };

    return (
        <Layout>

            <div>

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Add New Teacher
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and add a new teacher.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Teacher Name */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Teacher Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter teacher name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Teacher Image URL
                            </label>

                            <input
                                type="text"
                                placeholder="Paste image URL"
                                value={image}
                                onChange={(e) =>
                                    setImage(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                required
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

                            {/* Subject */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                            {/* Qualification */}
                            <div>

                                <label className="text-white block mb-2 font-medium">
                                    Qualification
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter qualification"
                                    value={qualification}
                                    onChange={(e) =>
                                        setQualification(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-400"
                                    required
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">

                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Add Teacher
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
}

export default AddTeacher;