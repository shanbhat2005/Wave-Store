import axios from 'axios'

 const API=axios.create({
    baseUrl:"http://localhost:3000/api",
    withCredentials:true
})
export default API
