import axios from 'axios';

export const fetchPostData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    if (response) return response.data
    return []
}

export const fetchPostById = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
    if (response) return response.data
    return []
}

export const fetchCommentPostByPostId = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}/comments`)
    if (response) return response.data
    return []
}

export const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const submitComment = async (data) => {
    const { postId } = data
    const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    return res
}