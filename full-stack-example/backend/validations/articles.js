const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const title =
  check('title')
    .notEmpty()
    .withMessage("Title must not be empty.");

const imageUrl =
  check('imageUrl')
    .notEmpty()
    .isURL()
    .withMessage('URL for image must be a valid URL.');

const body =
  check('body')
    .notEmpty()
    .withMessage('Body must contain text.');

const author =
  check('author')
    .notEmpty()
    .withMessage('No article author provided.');

exports.validateCreate = [
  title,
  imageUrl,
  body,
  author,
  handleValidationErrors,
];
