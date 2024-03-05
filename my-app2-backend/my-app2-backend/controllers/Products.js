import Product from "../models/ProductModel.js"
import User from "../models/UserModel.js";
import {Op} from "sequelize"

export const getProducts = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                include: [{
                    model: User,
                    attributes: ["name", "email"]
                }]
            })
        }else{
            response = await Product.findAll({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ["name", "email"]
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getProductsList = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                include: [{
                    model: User,
                    attributes: ["name", "email", "nim"]
                }]
            })
        }else{
            response = await Product.findAll({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                // where: {
                //     userId: req.userId
                // },
                include: [{
                    model: User,
                    attributes: ["name", "email", "nim"]
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getProductById = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data Tidak Ditemukan!"})
        let response;
        if(req.role === "admin"){
            response = await Product.findOne({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                where: {
                    id: product.id
                },
                include: [{
                    model: User,
                    attributes: ["name", "email"]
                }]
            })
        }else{
            response = await Product.findAll({
                attributes: ["uuid", "name", "price", "status", "tgl_pinjam", "tenggat"],
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                },
                include: [{
                    model: User,
                    attributes: ["name", "email"]
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createProduct = async(req, res) => {
    const {name, price, status, tgl_pinjam, tenggat} = req.body
    try {
        await Product.create({
            name: name,
            price: price,
            status: status,
            tgl_pinjam: tgl_pinjam,
            tenggat: tenggat,
            userId: req.userId
        })
        res.status(201).json({msg: "Product Created Succes!"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data Tidak Ditemukan!"})
        const {name, price, status, tgl_pinjam, tenggat} = req.body
        if(req.role === "admin"){
            await Product.update({name, price, status, tgl_pinjam, tenggat}, {
                where: {
                    id: product.id
                }
            })
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang!"})
            await Product.update({name, price, status, tgl_pinjam, tenggat}, {
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                }
            })
        }
        res.status(200).json({msg: "Product updated successfully!"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if(!product) return res.status(404).json({msg: "Data Tidak Ditemukan!"})
        const {name, price, status, tgl_pinjam, tenggat} = req.body
        if(req.role === "admin"){
            await Product.destroy({
                where: {
                    id: product.id
                }
            })
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang!"})
            await Product.destroy({
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                }
            })
        }
        res.status(200).json({msg: "Product deleted successfully!"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}