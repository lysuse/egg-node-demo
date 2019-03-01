'use strict';
module.exports = {
    // 登陆用户信息
    get loginUser() {
        //1. 收银机websocket连接参数格式 pos-deviceId-merchantId-branchId
        //2. h5手机网页端连接参数格式 wap-userId-merchantId-branchId-tableId
        const clientAuth = this.request.headers['clientauth'] || this.request.query.clientAuth || '';
        if (!this.cacheUser || clientAuth !== this.cacheUser.authPlain) {
            this.cacheUser = this.request.loginUser;
        }
        return this.cacheUser;
    }
};