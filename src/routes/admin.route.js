const { Router } = require('express')
const { adminPanel } = require('../controllers/admin')
const router = Router()

router.put('/user/:id', adminPanel)

module.exports = router