import request from '@/utils/request'

// 商品列表接口
export function productList(query) {
    return request({
        url: '/api/comms/comm',
        method: 'get',
        params: query,
    })
}

// 商品删除接口
export function deleteProduct(id) {
    return request({
        url: '/api/comms/delete',
        method: 'get',
        params: { id },
    })
}

// 用户信息修改接口
export function modifyProduct(id) {
    return request({
        url: `/api/comms/modify/${id}`,
        method: 'get',
    })
}

// 商品信息提交接口
export function updateProduct(data) {
    return request({
        url: '/api/comms/update',
        method: 'post',
        data: data
    })
}

// 添加商品接口
export function addProduct(data) {
    return request({
        url: '/api/comms/add',
        method: 'post',
        data: data
    })
}