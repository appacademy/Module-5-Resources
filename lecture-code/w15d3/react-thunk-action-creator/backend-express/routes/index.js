const express = require('express');
const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter);

module.exports = router;
