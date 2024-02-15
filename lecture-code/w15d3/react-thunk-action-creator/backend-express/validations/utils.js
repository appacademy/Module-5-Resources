const { validationResult } = require('express-validator');

exports.handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty())  {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = new Error('Bad request.');
    err.errors = errors;
    err.status = 422;
    err.title = 'Bad request.';
    next(err);
    return;
  }
  next();
}
