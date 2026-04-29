import request from '@/utils/request'

export const userApi = {
    getInfo() {
        return request.get('/api/user/info')
    },
    addUser(data: { username: string; password: string }) {
        return request.post('/login', data)
    }
}