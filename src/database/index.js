const Sequelize = require('sequelize')

const configDb = require('../config/database')

const connection = require(configDb)

module.exports = connection