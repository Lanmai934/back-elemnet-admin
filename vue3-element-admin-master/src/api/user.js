import request from '@/utils/request'

// 用户列表接口
export function userList(query) {
    return request({
        url: '/api/user/list',
        method: 'get',
        params: query,
    })
}

// 用户删除接口
export function deleteUser(id) {
    return request({
        url: '/api/user/delete',
        method: 'get',
        params: { id },
    })
}

// 用户信息修改接口
export function modifyUser(id) {
    return request({
        url: `/api/user/modify/${id}`,
        method: 'get',
    })
}

// 用户信息提交接口
export function updateUser(data) {
    return request({
        url: '/api/user/update',
        method: 'post',
        data: data
    })
}

// 添加用户接口
export function addUser(data) {
    return request({
        url: '/api/user/add',
        method: 'post',
        data
    })
}