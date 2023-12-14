const router = require('express').Router();
const articlesRouter = require('./articles');

router.use('/articles', articlesRouter);

module.exports = router;
