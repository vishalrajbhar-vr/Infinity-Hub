import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('https://infinity-hub-4.onrender.com/addblog', data)
    return response;
}

export const getAllBlog = async () => {
    let response = await axios.get('https://infinity-hub-4.onrender.com/allblog')
    return response;
}

export const deleteBlog = async (id) => {
    const response = await axios.delete(
        `https://infinity-hub-4.onrender.com/deleteblog/${id}`
    );

    return response;
};

export const getfeatchBlogDetails = async (id) => {
    return axios.get(
        `https://infinity-hub-4.onrender.com/getblogbyid/${id}`
    );
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`https://infinity-hub-4.onrender.com/editblog/${id}`, data)
    return response;
}

export const viewBlog = async (id, data) => {
    let response = await axios.get(`https://infinity-hub-4.onrender.com/viewblog/${id}`, data)
    return response;
}
