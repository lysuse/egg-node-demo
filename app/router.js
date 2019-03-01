'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/order')(app);
  // socket.io 事件处理
  app.io.route('chat', app.io.controller.chat.index);
};
