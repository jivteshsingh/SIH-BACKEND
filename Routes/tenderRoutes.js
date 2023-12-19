const express = require("express");
const { uploadTender, fetchTender } = require("../Controllers/tenderControllers");
const {protect} = require("../Middlewares/authMiddleware")


const router = express.Router();

router.route('/upload').post(protect,uploadTender);
router.route('/fetch').post(protect,fetchTender);


module.exports = router;