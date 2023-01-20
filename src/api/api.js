import axios from "axios"

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "7ae65a82-0790-431d-bbf5-8d57f580a4e9"}
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },

    follow (id) {
        return instance.post(`follow/${id}`, {})
        .then(response => response.data);
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    },
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
        .then(response => response.data)
    },

    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },

    logout () {
        return instance.delete(`auth/login`)
    },
}

export const profileAPI = {
    getUserProfile (id) {
        return instance.get(`profile/${id}`)
    },

    getUserStatus (id) {
        return instance.get(`profile/status/${id}`)
    },

    updateStatus (status) {
        return instance.put(`profile/status`, { status })
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

