import axios from 'axios'


export const addProduct = async (data) => {
    let response = await axios.post('https://infinity-hub-4.onrender.com/addproduct', data)
    return response;
}


export const getAllProducts = async () => {
    let response = await axios.get('https://infinity-hub-4.onrender.com/allproduct')
    return response;
}

export const deleteProduct = async (id) => {

    const response = await axios.delete(
        `https://infinity-hub-4.onrender.com/deleteproduct/${id}`
    );

    return response;
};