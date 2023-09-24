const express = require('express')
const router = express.Router()
const root = require('./root')

router.use(root)

module.exports = router;