import express from "express"
import {
    getBorrows,
    getBorrowsById,
    getBorrowsByLab,
    createBorrows,
    updateBorrows,
    deleteBorrows
} from "../controllers/Borrows.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()

router.get('/jadwal', getBorrows)
router.get('/jadwal/:id', getBorrowsById)
router.get('/jadwal/perlab/:lab', getBorrowsByLab)
router.post('/jadwal', verifyUser, adminOnly, createBorrows)
router.patch('/jadwal/:id',updateBorrows)
router.delete('/jadwal/:id', deleteBorrows)

export default router