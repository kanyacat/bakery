import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bakery-backend-lime.vercel.app/'
})

//работает если происходит любой запрос
instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance