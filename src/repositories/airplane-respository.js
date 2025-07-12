const { Airplane } = require('../models');
const CrudRepository = require('./crud-respository');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;