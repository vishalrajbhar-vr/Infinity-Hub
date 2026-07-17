import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('https://infinity-hub-4.onrender.com/addblog', data)
    return response;
}

export const getAllBlog = async () => {
    let response = await axios.get('http://localhost:3000/allblog')
    return response;
}

export const deleteBlog = async (id) => {
    const response = await axios.delete(
        `http://localhost:3000/deleteblog/${id}`
    );

    return response;
};

export const getfeatchBlogDetails = async (id) => {
    return axios.get(
        `http://localhost:3000/getblogbyid/${id}`
    );
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`http://localhost:3000/editblog/${id}`, data)
    return response;
}

export const viewBlog = async (id, data) => {
    let response = await axios.get(`http://localhost:3000/viewblog/${id}`, data)
    return response;
}
