import axios from 'axios';


export const addCategory = async (data) => {
    let response = await axios.post('https://infinity-hub-4.onrender.com/addcategory', data)
    return response;
}


export const getAllCategory = async () => {
    let response = await axios.get('https://infinity-hub-4.onrender.com/allcategory')
    return response;
}

export const deleteCategory = async (id) => {

    const response = await axios.delete(
        `https://infinity-hub-4.onrender.com/deletecategory/${id}`
    );

    return response;
};