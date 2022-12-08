const mojoGetController = (req, res) => {
	const { name } = req.params
	res.json(`${name}_mojo`)
}

module.exports = mojoGetController
