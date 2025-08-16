const { Airport } = require('../models');
const CrudRepository = require('./crud-repository');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }

    async update(code, data) {
        const response = await Airport.update(data, {
            where: {
                code: code
            }
        });
        return response;
    }
}

module.exports = AirportRepository;