import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})

export default router