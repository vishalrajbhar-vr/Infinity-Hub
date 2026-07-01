import axios from 'axios';


export const addCategory = async (data) => {
    let response = await axios.post('http://localhost:3000/addcategory', data)
    return response;
}


export const getAllCategory = async () => {
    let response = await axios.get('http://localhost:3000/allcategory')
    return response;
}

export const deleteCategory = async (id) => {

    const response = await axios.delete(
        `http://localhost:3000/deletecategory/${id}`
    );

    return response;
};