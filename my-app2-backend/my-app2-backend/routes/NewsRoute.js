import express from "express"
import {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
} from "../controllers/News.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()

router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.post('/news', verifyUser, adminOnly, createNews)
router.patch('/news/:id', verifyUser, adminOnly, updateNews)
router.delete('/news/:id', verifyUser, adminOnly, deleteNews)

export default router