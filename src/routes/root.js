import { Router } from "express"
import logger from "../helpers/logger"

const router = Router()

router.get('/', (req,res) => {
    logger.info("Hello from root")
    res.send({msg: process.env.TITLE})
})

export default router