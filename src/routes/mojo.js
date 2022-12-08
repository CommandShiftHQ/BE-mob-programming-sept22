const express = require('express')

const mojoGetController = require('../controllers/mojo')

const mojoRouter = express.Router()

mojoRouter.get('/:name', mojoGetController)

module.exports = mojoRouter
