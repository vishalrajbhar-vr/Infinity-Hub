// src/service/student.js

import axios from "axios";

export const addTeacher = async (data) => {
    const response = await axios.post(
        "https://infinity-hub-4.onrender.com/addteacher",
        data
    );

    return response;
};


export const getAllteacher = async () => {
    const response = await axios.get(
        "https://infinity-hub-4.onrender.com/allteacher"
    );

    return response;
};


export const deleteTeacher = async (id) => {

    const response = await axios.delete(
        `https://infinity-hub-4.onrender.com/deleteteacher/${id}`
    );

    return response;
};