// src/service/student.js

import axios from "axios";

export const addTeacher = async (data) => {
    const response = await axios.post(
        "http://localhost:3000/addteacher",
        data
    );

    return response;
};


export const getAllteacher = async () => {
    const response = await axios.get(
        "http://localhost:3000/allteacher"
    );

    return response;
};


export const deleteTeacher = async (id) => {

    const response = await axios.delete(
        `http://localhost:3000/deleteteacher/${id}`
    );

    return response;
};