const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /cities
 * req-body { name: 'London' }
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.message = 'Successfully created a city';
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while creating a city';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * PATCH : /cities/:id
 * req-body { name: 'xyz' }
 */
async function updateCity(req, res) {
    try {
        const data = {
            name: req.body.name,
        }
        const city = await CityService.updateCity(req.params.id, data);
        SuccessResponse.message = 'Successfully updated an city';
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while updating an City';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * DELETE : /cities/:id
 * req-body { }
 */
async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.message = 'Something went wrong while deleting an city';
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    updateCity,
    destroyCity,
}