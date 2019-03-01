const loadUser = require('../app/util/auth');

module.exports = appInfo => {
    const config = exports = {};
  
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1532497891569_4210';
    
    // redis 相关配置
    config.redis = {
      client: {
        port: 6379,
        host: '127.0.0.1',
        password: 'yunpos',
        db: 4,
      },
    };

    // socket.io 相关配置
    config.io = {
      init: {
        allowRequest: (request, callback) => {
          const clientAuth = request._query.clientAuth || '';
          const nonstr = request._query.nonStr || '';
          const authToken = request._query.authToken || '';
          const user = loadUser(clientAuth, nonstr, authToken);
          // 一系列校验
          if (!user) {
            callback(400, false);
            return;
          }
          // 错误码、是否成功
          callback(0, true);
        }
      },
      namespace: {
        '/': {
          connectionMiddleware: [ ]
        }
      },
      redis: {
        port: 6379,
        host: '127.0.0.1',
        password: 'yunpos',
        db: 5,
      },
    };
  
    // mongo 相关配置
    config.mongoose = {
      client: {
        url: 'mongodb://10.26.111.193:30011/qrcode-fastfood',
        options: {},
      }
    };
  
    return config;
  };