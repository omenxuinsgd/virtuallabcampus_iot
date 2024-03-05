import News from '../models/NewsModel.js';
import path from 'path'
import fs from 'fs'

export const getNews = async (req, res) => {
    try {
        const response = await News.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNewsById = async (req, res) => {
    try {
        const response = await News.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNews = (req, res) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const desk = req.body.deskripsi;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await News.create({deskripsi: desk, name: name, image: fileName, url: url});
            res.status(201).json({msg: "Lab Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })    
}

export const updateNews = async (req, res) => {
    const lab = await News.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!lab) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = lab.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${lab.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const desk = req.body.deskripsi;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await News.update({deskripsi: desk, name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Lab Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}

export const deleteNews = async (req, res) => {
    const lab = await News.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!lab) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${lab.image}`;
        fs.unlinkSync(filepath);
        await News.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Lab Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}