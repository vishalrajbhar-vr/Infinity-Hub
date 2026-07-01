import axios from 'axios';


export const addProduct = async (data) => {
    let response = await axios.post('http://localhost:3000/addproduct', data)
    return response;
}


export const getAllProducts = async () => {
    let response = await axios.get('http://localhost:3000/allproduct')
    return response;
}

export const deleteProduct = async (id) => {

    const response = await axios.delete(
        `http://localhost:3000/deleteproduct/${id}`
    );

    return response;
};