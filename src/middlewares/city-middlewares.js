const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
    if (!req.body || !req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
        ErrorResponse.message = 'Something went wrong while creating a City';
        ErrorResponse.error = new AppError(['City name not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if (!req.body || !req.body.name) {
        ErrorResponse.message = 'Something went wrong while updating an City';
        ErrorResponse.error = new AppError(['City name not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}