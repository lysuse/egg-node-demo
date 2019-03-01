const Service = require('egg').Service;

class OrderService extends Service {
  async findMerchantOrders(merchantId) {
    return await this.ctx.model.Order.find({merchantId});
  }
}

module.exports = OrderService;
