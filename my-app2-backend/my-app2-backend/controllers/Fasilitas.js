import Fasilitas from '../models/FasilitasModel.js';
import path from 'path'
import fs from 'fs'

export const getFasilitas = async (req, res) => {
    try {
        const response = await Fasilitas.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFasilitasById = async (req, res) => {
    try {
        const response = await Fasilitas.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFasilitasByLab = async (req, res) => {
    try {
        const laboran = await Fasilitas.findOne({
            where: {
                lab: req.params.lab
            }
        })
        if(!laboran) return res.status(404).json({msg: "Data Tidak Ditemukan!"})
        let response;
        response = await Fasilitas.findAll({
            // attributes: ["uuid", "lab", "matkul", "dosen", "hari", "mulai", "berakhir", "sks", "kelas"],
            where: {
                lab: laboran.lab
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createFasilitas = (req, res) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const jumlah = req.body.jumlah;
    const lab = req.body.lab;
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
            await Fasilitas.create({jumlah: jumlah, lab: lab, name: name, image: fileName, url: url});
            res.status(201).json({msg: "Lab Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })    
}

export const updateFasilitas = async (req, res) => {
    const fslts = await Fasilitas.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!fslts) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = fslts.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${fslts.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const jumlah = req.body.jumlah;
    const lab = req.body.lab;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Fasilitas.update({jumlah: jumlah, lab: lab, name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Lab Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    
}

export const deleteFasilitas = async (req, res) => {
    const lab = await Fasilitas.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!lab) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${lab.image}`;
        fs.unlinkSync(filepath);
        await Fasilitas.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Lab Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}