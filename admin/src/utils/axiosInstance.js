import axios from 'axios'

// const SERVER_URL = 'http://localhost:5000'
const SERVER_URL = 'https://my-portfolio-hdfd.onrender.com'

const axiosInstance = axios.create({
    baseURL: SERVER_URL,
})

export default axiosInstance
