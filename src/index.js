const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

// below lines of code is a middlewares that parases the req.body of type json or urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT :- ${ServerConfig.PORT}`);
    // const { City, Airport } = require('./models');
    // const banglore = await City.findByPk(1);
    // await banglore.createAirport({
    //     name: 'Kempegowda International Airport',
    //     code: 'BLR',
    //     cityId: 1,
    // });
    // await banglore.createAirport({
    //     name: 'Kempegowda International Airport 2',
    //     code: 'BLR2',
    //     cityId: 1,
    // });
    // banglore.destroy({
    //     where: {
    //         id: 1,
    //     },
    // });
});