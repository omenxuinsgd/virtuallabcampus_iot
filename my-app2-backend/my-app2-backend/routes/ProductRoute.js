import express from "express"
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsList
} from "../controllers/Products.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()

router.get('/products', verifyUser, getProducts)
router.get('/products/list', verifyUser, getProductsList)
router.get('/products/:id', verifyUser, getProductById)
router.post('/products', verifyUser, createProduct)
router.patch('/products/:id', verifyUser, adminOnly, updateProduct)
router.delete('/products/:id', verifyUser, adminOnly, deleteProduct)

export default router