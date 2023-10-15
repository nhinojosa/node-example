import { Router } from "express"
import persons from "./persons"
import companies from "./companies"
import departments from "./departments"
import employees from "./employees"
const router = Router()

router.get('/', (req, res) => {
    res.send({msg: 'Inside API enpoints'})
})

router.use('/persons', persons)
router.use('/companies', companies)
router.use('/departments', departments)
router.use('/employees', employees)
export default router