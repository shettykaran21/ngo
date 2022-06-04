const express = require('express');

const { pay } = require('../controllers/payment');

const router = express.Router();

router.post('/', pay);

module.exports = router;
