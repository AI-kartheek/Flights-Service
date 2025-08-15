const { StatusCodes } = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot Create a new City Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(cityId, data) {
    try {
        const city = await cityRepository.update(cityId, data);
        return city;
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot Update an City Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    }
    catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot delete data of an city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    updateCity,
    destroyCity,
}