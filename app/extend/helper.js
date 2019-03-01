'use strict';
module.exports = {
    // 错误码列表
    get errorCodes() {
        return {
            // 
            SUCCESS: 0,
            // 参数异常
            ERROR_PARAMS: 10400,
            // 未登录
            ERROR_UNLOGIN: 10401,
            // 未授权，无权限访问
            ERROR_FORBIDDEN: 10403,
            // 服务器内部错误
            ERROR_SERVER_INNER: 10500,
            // json解析异常
            ERROR_JSON_PARSE: 10501,
            // 一般错误 可能业务异常
            ERROR_COMMON: 10100,
        };
    },
    // 成功返回json
    successResult (data, msg = 'success') {
        return {
            code: this.errorCodes.SUCCESS,
            data,
            msg
        };
    },
    // 一般错误返回json
    errorResult (data = null, msg = 'error') {
        return {
            code: this.errorCodes.ERROR_COMMON,
            data,
            msg
        };
    },
    // code方式错误码返回
    codeErrorResult (data, code = this.errorCodes.ERROR_COMMON, msg = 'error') {
        return {
            code,
            data,
            msg
        };
    },
    // 分页查询返回json
    pageResult (page = 1, pageSize = 10, total = 0, datas) {
        return {
            code: this.errorCodes.SUCCESS,
            data: {
                page,
                pageSize,
                total,
                totalPage: Math.ceil(total / pageSize),
                datas
            },
            msg: 'success'
        }
    }
};