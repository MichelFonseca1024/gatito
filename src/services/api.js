import Axios from 'axios'

const API_URL = 'http://192.168.18.5:3000/api'

const axiosInstance = Axios.create({
    baseURL: API_URL
})

const api = {
    get(url, params = {}) {
        return axiosInstance.get(url, { params })
    },
    post(url, body) {
        return axiosInstance.post(url, body)
    },
    put(url, body) {
        return axiosInstance.put(url, body)
    },
    delete(url) {
        return axiosInstance.delete(url)
    },
    login(body) {
        return axiosInstance.post('auth/login', body)
    },
    verifyToken(credentials) {
        return axiosInstance.post('auth/refresh-token', credentials)
    }
}

export { api }
