'use strict';
const loadUser = require('../util/auth');
module.exports = {
    get loginUser () {
        //1. 收银机websocket连接参数格式 pos-deviceId-merchantId-branchId
        //2. h5手机网页端连接参数格式 wap-userId-merchantId-branchId-tableId
        const clientAuth = this.headers['clientauth'] || this.query.clientAuth || '';
        const nonstr = this.headers['nonstr'] || this.query.nonStr || '';
        const authToken = this.headers['authtoken'] || this.query.authToken || '';
        return loadUser(clientAuth, nonstr, authToken);
    }
};