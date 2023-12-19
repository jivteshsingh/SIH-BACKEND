const express = require("express");
const { create_payment_intent } = require("../Controllers/paymentControllers");
const {protect} = require("../Middlewares/authMiddleware")


const router = express.Router();

router.route('/').post(protect,create_payment_intent);

module.exports = router;