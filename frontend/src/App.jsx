import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './web/pages/HomePage'
import Dashboard from './admin/pages/Dashboard'
import AddBlog from './admin/pages/AddBlog'
import AllBlog from './admin/pages/AllBlog'
import PageNotFound from './web/pages/PageNotFound'
import toast, { Toaster } from 'react-hot-toast';
import AllStudent from './admin/pages/AllStudent'
import AddStudent from './admin/pages/AddStudent'
import AddProduct from './admin/pages/AddProduct'
import AllProduct from './admin/pages/AllProduct'
import AddTeacher from './admin/pages/AddTeacher'
import AllTeacher from './admin/pages/AllTeacher'
import AddCategory from './admin/pages/AddCategory'
import AllCategory from './admin/pages/AllCategory'
import EditBlog from './admin/pages/EditBlog'
import EditStudent from './admin/pages/EditStudent'
import ViewBlogPage from './admin/pages/ViewBlogPage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin/view-details/:id' element={<ViewBlogPage />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/add-blog' element={<AddBlog />} />
        <Route path='/admin/all-blogs' element={<AllBlog />} />
        <Route path='/admin/add-student' element={<AddStudent />} />
        <Route path='/admin/all-student' element={<AllStudent />} />
        <Route path='/admin/add-product' element={<AddProduct />} />
        <Route path='/admin/all-product' element={<AllProduct />} />
        <Route path='/admin/add-teacher' element={<AddTeacher />} />
        <Route path='/admin/all-teacher' element={<AllTeacher />} />
        <Route path='/admin/add-category' element={<AddCategory />} />
        <Route path='/admin/all-category' element={<AllCategory />} />
       <Route path='/admin/edit-blog/:id' element={<EditBlog />} />
       <Route path='/admin/edit-student/:id' element={<EditStudent />} />


        <Route
   path="/admin/edit-blog/:id"
   element={<EditBlog />}
/>



        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
