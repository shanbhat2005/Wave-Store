import axios from 'axios'
// import { store } from '../app/store'

 const API=axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})

export const setUpAuthInterceptor=(store)=>{
    API.interceptors.request.use(
    (config)=>{
        const accessToken=store.getState().auth.accessToken;
        if(accessToken){
            config.headers.Authorization=`Bearer ${accessToken}`
        }
        return config

    })

}

export default API
