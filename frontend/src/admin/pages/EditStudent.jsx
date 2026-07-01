// src/admin/pages/EditStudent.jsx

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router";

import { featchstudent, editStudent } from "../../service/student";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [studentName, setStudentName] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [studentClass, setStudentClass] = useState("");

    // ---------------- GET SINGLE STUDENT ----------------
    const getStudentData = async () => {
        try {
            const res = await featchstudent(id);

            const student = res.data.studentfeatch;

            setStudentName(student.studentName);
            setAddress(student.address);
            setImage(student.image);
            setFatherName(student.fatherName);
            setMotherName(student.motherName);
            setDob(student.dob);
            setMobile(student.mobile);
            setStudentClass(student.class);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    // ---------------- UPDATE STUDENT ----------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const studentData = {
                studentName,
                address,
                image,
                fatherName,
                motherName,
                dob,
                mobile,
                class: studentClass,
            };

            const res = await editStudent(id, studentData);

            toast.success(res.data.message);

            navigate("/admin/all-student");
        } catch (error) {
            console.log(error);
            toast.error("Student update failed");
        }
    };

    useEffect(() => {
        getStudentData();
    }, []);

    return (
        <Layout>
            <div>
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Edit Student
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Update student information
                    </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <input
                            type="text"
                            placeholder="Student Name"
                            value={studentName}
                            onChange={(e) =>
                                setStudentName(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <textarea
                            rows="4"
                            placeholder="Address"
                            value={address}
                            onChange={(e) =>
                                setAddress(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <input
                            type="text"
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        {image && (
                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">
                                <img
                                    src={image}
                                    alt="student"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <input
                            type="text"
                            placeholder="Father Name"
                            value={fatherName}
                            onChange={(e) =>
                                setFatherName(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <input
                            type="text"
                            placeholder="Mother Name"
                            value={motherName}
                            onChange={(e) =>
                                setMotherName(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <input
                            type="date"
                            value={dob}
                            onChange={(e) =>
                                setDob(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) =>
                                setMobile(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <input
                            type="text"
                            placeholder="Class"
                            value={studentClass}
                            onChange={(e) =>
                                setStudentClass(e.target.value)
                            }
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white"
                        />

                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600 text-white font-semibold transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition"
                            >
                                Update Student
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default EditStudent;