import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(config => {
    // Called when the request are going to be done
    const token = sessionStorage.getItem('token')
    if(token && config.headers) config.headers.Authorization = `Bearer ${token}`
    return config
}, (error) => { // Function that is called when an error occurs in request
    return Promise.reject(error)
})

export default http