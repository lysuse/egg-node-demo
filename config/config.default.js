'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532497891569_4210';

  // add your config here
  config.middleware = ['auth'];

  config.onerror = {
    all(err, ctx) {
      // json hander
      const helper = ctx.helper;
      let result = null;
      // 参数校验失败
      if (err.code && err.code === 'invalid_param' && err.errors) {
        result = helper.codeErrorResult(err.errors, helper.errorCodes.ERROR_PARAMS, err.errors[0].code + ' ['+err.errors[0].field+']')
      } else {
        result = helper.codeErrorResult(null, helper.errorCodes.ERROR_SERVER_INNER, '服务器内部异常！');
      }
      ctx.body = result;
      ctx.status = 200;
    },
  }
  // 关闭csrf校验
  config.security = {
    csrf: {
      ignore: ctx => !!ctx.loginUser,
    },
    xframe: {
      enable: false,
    },
  };
  // 允许跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  }

  return config;
};
