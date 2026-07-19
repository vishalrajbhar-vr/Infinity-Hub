// src/service/student.js

import axios from "axios";

export const addStudent = async (data) => {
    const response = await axios.post(
        "https://infinity-hub-2.onrender.com/addstudent",
        data
    );

    return response;
};

export const getAllStudents = async () => {
    const response = await axios.get(
        "https://infinity-hub-2.onrender.com/allstudents"
    );

    return response;
};

export const deleteStudent = async (id) => {

    const response = await axios.delete(
        `https://infinity-hub-2.onrender.com/deletestudents/${id}`
    );

    return response;
};

export const featchstudent = async(id)=>{
    const response = await axios.get(`https://infinity-hub-2.onrender.com/getstudentbyid/${id}`);
    return response;
};

export const editStudent = async(id, updatedData)=>{
    const response = await axios.patch(`https://infinity-hub-2.onrender.com/editstudent/${id}`, updatedData  );
    return response;
};