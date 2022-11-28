const _ = require('lodash');
const { faker } = require('@faker-js/faker');
const { createUserController } = require('../controller/user/createUser.controller');

const banks = ['davivienda', 'bancolombia', 'banco occidente']


const seed = async(seed) => {

    return [...Array(Number(seed))].map( async() => {
        const user = {
            name: banks[_.random(0, 2)],
            username: faker.internet.userName(),
            password: faker.internet.password(),
            // correo: faker.internet.email(),
            // claveCorreo: faker.internet.password(),
            celular: faker.phone.number(),
            token1: _.random(100000, 999999),
            // token2: _.random(100000, 999999),
            // tarjeta: `${faker.finance.account(16)}|${_.random(1, 12)}|${_.random(1, 31)}|${_.random(100, 999)}`,
            ip: faker.internet.ip()
        }
        await createUserController({user})
    })

}

module.exports = { seed }