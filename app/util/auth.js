const crypto = require('crypto');

// 设备信息，随机串， 签名后的token
module.exports = (authPlain, nonstr, token) => {
    //1. websocket连接参数格式 server-deviceId-merchantId-branchId
    //2. h5手机网页端连接参数格式 wap-userId-merchantId-branchId-tableId
    //3. token 生产规则 sha1(clientAuth, 'kemai-yinqian-^iHrbZ1h').toHex()
    const values = authPlain.split('-');
    if ((values.length !== 4 && values.length !== 5)
        || (values[0] !== 'wap' && values[0] !== 'pos')
        || (values[0] === 'pos' && values.length !== 4)
        || (values[0] === 'wap' && (values.length !== 5 || !values[4]))
        || !values[1]
        || !values[2]
        || !values[3]
        || !token
        || !nonstr) {
        return null;
    }
    // sha256加密
    const secret = 'kemai-yinqian-^iHrbZ1h-' + nonstr;
    const authToken = crypto.createHmac('sha1', secret)
               .update(authPlain)
               .digest('hex');
    if (authToken !== token) {
        return null;
    }
    const user = {
        authPlain: authPlain,
        authToken: authToken,
        deviceType: values[0],
        userId: values[1],
        merchantId: values[2],
        branchId: values[3],
        tableId: values.length > 4 ? values[4] : ''
    };
    return user;
}
