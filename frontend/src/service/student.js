// src/service/student.js

import axios from "axios";

export const addStudent = async (data) => {
    const response = await axios.post(
        "http://localhost:3000/addstudent",
        data
    );

    return response;
};

export const getAllStudents = async () => {
    const response = await axios.get(
        "http://localhost:3000/allstudents"
    );

    return response;
};

export const deleteStudent = async (id) => {

    const response = await axios.delete(
        `http://localhost:3000/deletestudents/${id}`
    );

    return response;
};

export const featchstudent = async(id)=>{
    const response = await axios.get(`http://localhost:3000/getstudentbyid/${id}`);
    return response;
};

export const editStudent = async(id, updatedData)=>{
    const response = await axios.patch(`http://localhost:3000/editstudent/${id}`, updatedData  );
    return response;
};