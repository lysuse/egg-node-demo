'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  id: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};


class OrderController extends Controller {
  async create() {
      // 1. 鉴权
      // 2. 参数校验
      // 3. service调用
      //    3.1 db操作 => model 操作
      //    3.2 业务处理
      // 4. 返回结果
      const ctx = this.ctx;
      // 校验 `ctx.request.body` 是否符合我们预期的格式
      // 如果参数校验未通过，将会抛出一个 status = 422 的异常
      ctx.validate(createRule);

      this.ctx.body = this.ctx.helper.pageResult(1, 10, 20, [
        {name: 'a', id: 1, size: 10},
        {name: 'b', id: 2, size: 12}
      ]);
  }
  async detail() {
    this.ctx.body = this.ctx.helper.successResult({name: 'a', id: 1, size: 10});
  }
}

module.exports = OrderController;
