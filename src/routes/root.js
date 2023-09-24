const express = require('express')
const router = express.Router()
const logger = require('pino')()


router.get('/', (req,res) => {
    logger.info("Hello from root")
    res.send({msg: process.env.TITLE})
})

module.exports = router;