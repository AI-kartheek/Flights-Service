const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');

const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot Create a new Flight Object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    const endingTripTime = " 23:59:00";
    let sortFilter = [];
    // trips = MUM-DEL
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // TODO: add a check that they are not same. if same throw an error
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split('-');
        maxPrice = (maxPrice ? maxPrice : 20000);
        minPrice = (minPrice ? minPrice : 0);
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice],
        }
    }
    if (query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if (query.tripDate) {
        // filter dates according to the IST timings
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    if (query.sort) {
        const params = query.sort.split(',');
        sortFilter = params.map((param) => param.split('_'));
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the Flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    }
    catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The flight you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of an flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
}