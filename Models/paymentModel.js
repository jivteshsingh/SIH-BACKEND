// MongoDB model (Payment.js)
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: String,
    tendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tender"
    },
    status: String,
    transactionId: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
