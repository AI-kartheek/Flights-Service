const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
    if (!req.body || !req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['flight Number not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['Airplane Id Code not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['Departure Airport Id not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['Arrival Airport Id not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['arrival Time not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['Departure Departure Time not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['price not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body || !req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating an Flight';
        ErrorResponse.error = new AppError(['Total Seats not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if (!req.body || !req.body.seats) {
        ErrorResponse.message = 'Something went wrong while updating an Flight';
        ErrorResponse.error = new AppError(['Seats not found in the incoming request in the correct form.'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}