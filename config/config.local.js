const loadUser = require('../app/util/auth');

module.exports = appInfo => {
    const config = exports = {};
  
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1532497891569_4210';
  
    config.redis = {
      client: {
        port: 6379,
        host: '192.168.162.62',
        password: '',
        db: 0,
      },
    };
  
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
          connectionMiddleware: []
        }
      },
      redis: {
        host: '192.168.162.62',
        port: 6379
      },
    };

  
    config.mongoose = {
      client: {
        url: 'mongodb://192.168.162.62/qrcode-kc',
        options: {},
      }
    };
  
    return config;
  };
  