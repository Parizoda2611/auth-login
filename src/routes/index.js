const authRouter = require('./login.route')
const adminRoute = require('./admin.route')
const murojaatRoute = require('./murojaat.route')

module.exports = [
  authRouter, adminRoute, murojaatRoute
]