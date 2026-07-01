// models/student.model.js

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
     image: {
            type: String,
            required: true,
            
        },

    fatherName: {
        type: String,
        required: true,
    },

    motherName: {
        type: String,
        required: true,
    },

    dob: {
        type: String,
        required: true,
    },

    mobile: {
        type: String,
        required: true,
    },

    class: {
        type: String,
        required: true,
    },

});

const StudentModel = mongoose.model(
    "student",
    studentSchema
);

export default StudentModel;