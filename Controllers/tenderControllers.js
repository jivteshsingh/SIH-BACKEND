const asyncHandler = require("express-async-handler");
const Tender = require('../Models/tenderModel');

const uploadTender = asyncHandler(async (req,res) => {
    const { title, description, type, pic, status, applicants, document } = req.body;

    try {
        const newTender = new Tender({ title, description, type, pic, status, applicants, document, payment });
        await newTender.save();
        res.status(201).json(newTender);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const fetchTender = asyncHandler(async (req,res) => {
    try {
        const tenders = await Tender.find({});
        res.json(tenders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = { uploadTender, fetchTender }