'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0];
      this.ctx.socket.e
    }
  }
  return Controller;
};