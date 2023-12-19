const asyncHandler = require("express-async-handler");
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key
const Payment = require('../Models/paymentModel');



const create_payment_intent = asyncHandler(async (req,res) => {
    try {
        const { amount } = req.body; // Assume you get the amount and user ID from the client

        // Create a PaymentIntent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            // additional Stripe parameters...
        });

        // Here, create and store the payment record in MongoDB
        const newPayment = new Payment({
            amount,
            currency: 'usd',
            status: 'Pending', // Initially set as Pending
            transactionId: paymentIntent.id
        });

        await newPayment.save();

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});





module.exports = { create_payment_intent };