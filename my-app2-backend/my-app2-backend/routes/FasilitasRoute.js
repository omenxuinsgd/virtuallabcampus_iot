import express from "express"
import {
    getFasilitas,
    getFasilitasById,
    createFasilitas,
    updateFasilitas,
    deleteFasilitas,
    getFasilitasByLab
} from "../controllers/Fasilitas.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()

router.get('/fasilitas', getFasilitas)
router.get('/fasilitas/:id', getFasilitasById)
router.get('/perfas/fasilitas/:lab', getFasilitasByLab)
router.post('/fasilitas', verifyUser, adminOnly, createFasilitas)
router.patch('/fasilitas/:id', verifyUser, adminOnly, updateFasilitas)
router.delete('/fasilitas/:id', verifyUser, adminOnly, deleteFasilitas)

export default router