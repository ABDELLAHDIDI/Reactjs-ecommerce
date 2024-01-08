import axios from 'axios'


const baseUrl = axios.create({ baseURL: "http://192.168.1.122:8000" })

export default baseUrl