const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /aiports
 * req-body { name: 'IGI', code: 'DEL', cityId: 1, address: 'New Delhi' }
 */
async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        SuccessResponse.message = 'Successfully created an airport';
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while creating an Airport';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * GET : /airports
 * req-body { }
 */
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while fetching Airports';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * GET : /airports/:id
 * req-body { }
 */
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while fetching an Airport';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * POST : /aiports/:code
 * req-body { name: 'IGI', code: 'DEL', cityId: 1, address: 'New Delhi' }
 */
async function updateAirport(req, res) {
    try {
        const data = {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        };
        const response = await AirportService.updateAirport(req.params.code, data);
        SuccessResponse.message = 'Successfully updated an airport';
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while updating an Airport';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * DELETE : /airports/:id
 * req-body { }
 */
async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while deleting an Airport';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    destroyAirport
}