const { Router } = require('express')
const { murojaatPost, murojaatGet } = require("../controllers/murojaat")
const router = Router()

router.post('/add/murojaat', murojaatPost)
router.get('/get/murojaat', murojaatGet)

module.exports = router