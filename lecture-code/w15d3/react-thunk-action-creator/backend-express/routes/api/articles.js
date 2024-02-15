const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Article } = require('../../db/models');
const { validateCreate } = require('../../validations/articles');

router.get('/', asyncHandler(async (_req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
}));

router.post('/', validateCreate, asyncHandler(async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
}));

module.exports = router;
