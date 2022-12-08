const express = require('express')

const mojoRouter = require('./routes/mojo')

const app = express()

app.use(express.json())

app.use('/mojo', mojoRouter)

// app.get('/mojo/:name', (req, res) => {
// 	const { name } = req.params
// 	res.json(`${name}_mojo`)
// })

module.exports = app
