//import './helpers/dotenv'

//const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
import logger from './helpers/logger'
import router from './routes'
import {notFound, errorHandler} from './helpers/errors'



const app = express()
const port = process.env.PORT || 3000

app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.ORIGIN }))
app.use(helmet())
app.use(router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>logger.info(`Application started at http://localhost:${process.env.PORT}`))