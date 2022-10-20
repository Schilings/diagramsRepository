/**
 * 工具类
 */


const promiseAjax = (url, param, method, timeout) => {
    return new Promise((resolve, reject) => {
        // noinspection JSUnresolvedFunction
        $.ajax({
            url: url,
            type: method,
            data: param,
            traditional: true,
            timeout: timeout,
            success: e => {
                resolve(e);
            },
            error: e => {
                console.log(e);
                reject('请求失败aa');
            }
        });
    });
};


const post = (url, param = {}, timeout = 5000) => {
    return promiseAjax(url, param, 'POST', timeout);
};


const get = (url, param = {}, timeout = 5000) => {
    return promiseAjax(url, param, 'GET', timeout);
};

// 将时间戳 转 hh:mm
function formatDate(date) {
    date = new Date(date);
    let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return (hh + mm);
}