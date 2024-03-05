import express from "express"
import {
    getLabs,
    getLabsById,
    createLabs,
    updateLabs,
    deleteLabs,
    getLabsByLab
} from "../controllers/Labs.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()

router.get('/labs',  getLabs)
router.get('/labs/:id',  getLabsById)
router.get('/labs/perlab/:name', getLabsByLab)
router.post('/labs', verifyUser, adminOnly, createLabs)
router.patch('/labs/:id', verifyUser, adminOnly, updateLabs)
router.delete('/labs/:id', verifyUser, adminOnly, deleteLabs)

export default router