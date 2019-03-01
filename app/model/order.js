module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const OrderScheme = new Schema({
        id: {type: String},
        totalMoney: {type: Number},
        createdTime: {type: Date},
    });

    return mongoose.model('Order', OrderScheme);
}