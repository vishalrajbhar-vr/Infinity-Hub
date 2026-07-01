// models/teacher.model.js

import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({

    name: {
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
          subject: {
            type: String,
            required: true,
            
        },

    qualification: {
        type: String,
        required: true,
    },

});

const TeacherModel = mongoose.model(
    "teacher",
    teacherSchema
);

export default TeacherModel;