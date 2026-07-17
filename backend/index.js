// index.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import BlogModel from './models/blog.model.js';
import StudentModel from './models/student.model.js';
import ProductModel from './models/product.model.js';
import TeacherModel from './models/teacher.model.js';
import CategoryModel from './models/category.model.js';

const app = express();


// ----- MIDDLEWARE -----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


// ----- PORT -----
const port = 3000;


// ----- CONNECT DB FUNCTION -----
const connectDB = async () => {

    try {

        await mongoose.connect(
            'mongodb+srv://vishalrajbharvr01_db_user:Rmj7BQv8ndtLoZqn@infinityhub.m7tmykd.mongodb.net/infinity'
        );

        console.log("MongoDB connected 🥳");

    } catch (error) {

        console.log("MongoDB not connected");
        console.log(error);
    }
};

connectDB();


// ----- HOME ROUTE -----
app.get('/', (req, res) => {
    res.send('Welcome to Infinity Hub');
});


/* =========================================================
                    BLOG API
========================================================= */
// ----- ADD BLOG -----
app.post('/addblog', async (req, res) => {

    try {

        const {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags
        } = req.body;

        const newBlog = await BlogModel.create({
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags
        });

        res.status(201).json({
            success: true,
            message: "Blog Added Successfully",
            newBlog
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add Blog API Error",
            error
        });
    }
});

// ----- ALL BLOG -----
app.get('/allblog', async (req, res) => {

    try {

        const allBlogs = await BlogModel.find();

        const blogCount = await BlogModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "Blog Fetched Successfully",
            blogCount,
            allBlogs
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "All Blog API Error",
            error
        });
    }
});

// ------------------------------------------- DELETE blog -------------------------------
app.delete('/deleteblog/:id', async (req, res) => {

    try {

        const deletedBlog =
            await BlogModel.findByIdAndDelete(
                req.params.id
            );

        if (!deletedBlog) {

            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog Deleted Successfully",
            deletedBlog
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Delete Blog API Error",
            error
        });
    }
});

// --------------------------------------- featch BLOG by id -----------------------
app.get('/getblogbyid/:id', async (req, res) => {
    try {
        const { id } = req.params
        let blogDetails = await BlogModel.findOne({ _id: id })
        res.status(200).json({ success: true, message: "Blog Fetched Successfully", blogDetails })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Single Blog Fetch API Error", error })
    }
})


//--------------------------- edit blog----------------------
app.patch('/editblog/:id', async (req, res) => {
    try {
        let { title, shortDescription, longDescription, image, date, author, category, tags } = req.body

        const { id } = req.params

        let updatedBlog = await BlogModel.findOneAndUpdate({ _id: id }, { title, shortDescription, longDescription, image, date, author, category, tags }, { new: true })

        if (!updatedBlog) {
            res.status(500).json({ success: false, message: "Blog Not Updated" })
        }

        res.status(200).json({ success: true, message: "Blog Updated Successfully", updatedBlog })


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Update Blog API Error", error })
    }
})

// ---------------- view BLOG DETAILS ----------------
app.get('/viewblog/:id', async (req, res) => {

    try {
        const { id } = req.params
        const viewsBlogdetails = await BlogModel.findById({ _id: id });

        if (!viewsBlogdetails) {

            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            });
        }

        res.status(200).json({
            success: true,
            viewsBlogdetails
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "view Blog API Error",
            error
        });
    }
});






/* =========================================================
                    STUDENT API
========================================================= */
// ----- ADD STUDENT -----
app.post('/addstudent', async (req, res) => {

    try {

        const {
            image,
            studentName,
            address,
            fatherName,
            motherName,
            dob,
            mobile,
            class: studentClass
        } = req.body;

        const newStudent = await StudentModel.create({
            image,
            studentName,
            address,
            fatherName,
            motherName,
            dob,
            mobile,
            class: studentClass
        });

        res.status(201).json({
            success: true,
            message: "Student Added Successfully",
            newStudent
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add Student API Error",
            error
        });
    }
});

// ----- ALL STUDENTS -----
app.get('/allstudents', async (req, res) => {

    try {

        const allStudents = await StudentModel.find();

        const studentCount =
            await StudentModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "Students Fetched Successfully",
            studentCount,
            allStudents
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "All Students API Error",
            error
        });
    }
});

// ----- DELETE STUDENT -----
app.delete('/deletestudents/:id', async (req, res) => {

    try {

        const deletedStudent =
            await StudentModel.findByIdAndDelete(
                req.params.id
            );

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully",
            deletedStudent
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Delete Student API Error",
            error
        });
    }
});

// -------------------featch student detail by id------------------
app.get('/getstudentbyid/:id', async (req, res) => {
    try {
        const { id } = req.params
        let studentfeatch = await StudentModel.findOne({ _id: id })
        res.status(200)
            .json({ success: false, message: "featch student successfully", studentfeatch })

        console.log("runn huaa")
    }

    catch (error) {
        console.log(error)
        res.status(500)
            .json({ success: false, message: "student api error" })

    }
})

//--------------------------- edit student----------------------
app.patch('/editstudent/:id', async (req, res) => {
    try {
        let { image, studentName, address, fatherName, motherName, dob, mobile, class: studentClass } = req.body

        const { id } = req.params

        let updatedStudent = await StudentModel.findOneAndUpdate({ _id: id }, { image, studentName, address, fatherName, motherName, dob, mobile, class: studentClass }, { new: true })

        if (!updatedStudent) {
            res.status(500).json({ success: false, message: "Student Not Updated" })
        }

        res.status(200).json({ success: true, message: "Student Updated Successfully", updatedStudent })


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Update student API Error", error })
    }
})

/* =========================================================
                    product API
========================================================= */
app.post('/addproduct', async (req, res) => {

    try {

        const {
            title,
            image,
            price,
            rating,
            stock,
            offers,
            desc
        } = req.body;

        const newProduct = await ProductModel.create({
            title,
            image,
            price,
            rating,
            stock,
            offers,
            desc
        });

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            newProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add product API Error",
            error
        });
    }
});

// ------------------------------------------------- ALL product-------------------------------- -----
app.get('/allproduct', async (req, res) => {

    try {

        const allProduct = await ProductModel.find();

        const productCount =
            await ProductModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "Product Fetched Successfully",
            productCount,
            allProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "All Products API Error",
            error
        });
    }
});

// ----- DELETE product -----
app.delete('/deleteproduct/:id', async (req, res) => {
    try {
        const deletedproduct = await ProductModel.findByIdAndDelete(req.params.id);

        if (!deletedproduct) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            deletedproduct
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Delete Product API Error",
            error
        });
    }
});


/* =========================================================
                    teacher API
========================================================= */
app.post('/addteacher', async (req, res) => {

    try {

        const {
            name,
            image,
            address,
            subject,
            qualification,

        } = req.body;

        const newTeacher = await TeacherModel.create({
            name,
            image,
            address,
            subject,
            qualification

        });

        res.status(201).json({
            success: true,
            message: "Teacher Added Successfully",
            newTeacher
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add teacher API Error",
            error
        });
    }
});

// ----- ALL Teacher -----
app.get('/allteacher', async (req, res) => {

    try {

        const allTeacher = await TeacherModel.find();

        const TeacherCount =
            await TeacherModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "teacher Fetched Successfully",
            TeacherCount,
            allTeacher
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "All Teacher API Error",
            error
        });
    }
});

// ----- DELETE teacher -----
app.delete('/deleteteacher/:id', async (req, res) => {

    try {

        const deleteteacher =
            await TeacherModel.findByIdAndDelete(
                req.params.id
            );

        if (!deleteteacher) {
            return res.status(404).json({
                success: false,
                message: "teacher Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "teacher Deleted Successfully",
            deleteteacher
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Delete  API Erteacherror",
            error
        });
    }
});



/* =========================================================
                    CATEGORY API
========================================================= */
// ----------------------------- ADD CATEGORY -----------------------------
app.post('/addcategory', async (req, res) => {

    try {

        const {
            title,
            image,
            price,
            rating,
            stock,
            offers,
            desc
        } = req.body;

        const newCategory = await CategoryModel.create({
            title,
            image,
            price,
            rating,
            stock,
            offers,
            desc
        });

        res.status(201).json({
            success: true,
            message: "Category Added Successfully",
            newCategory
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add Category API Error",
            error
        });
    }
});

// ----------------------------- ALL CATEGORY -----------------------------
app.get('/allcategory', async (req, res) => {

    try {

        const allCategory = await CategoryModel.find();

        const categoryCount =
            await CategoryModel.countDocuments();

        res.status(200).json({
            success: true,
            message: "Category Fetched Successfully",
            categoryCount,
            allCategory
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "All Category API Error",
            error
        });
    }
});

// ----- DELETE category -----
app.delete('/deletecategory/:id', async (req, res) => {

    try {

        const deletecategory =
            await CategoryModel.findByIdAndDelete(
                req.params.id
            );

        if (!deletecategory) {
            return res.status(404).json({
                success: false,
                message: "category Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "category Deleted Successfully",
            deletecategory
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Delete category API Error",
            error
        });
    }
});

// ----- SERVER -----
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});