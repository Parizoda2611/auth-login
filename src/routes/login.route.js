const { Router } = require('express')
const {LoginUser } = require("../controllers/auth")
const router = Router()

router.post('/add/user', LoginUser)

module.exports = router

