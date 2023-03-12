import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/blog`;


export const getBlogPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}
export const getBlogPost = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
export const createBlogPost = async (blogPost) => {
    const response = await axios.post(API_URL, blogPost);
    return response.data;
}

export const updateBlogPost = async (id, blogPost) => {
    const response = await axios.patch(`${API_URL}/${id}`, blogPost);
    return response.data;
}

export const deleteBlogPost = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}