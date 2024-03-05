import Borrow from "../models/BorrowModel.js"
import User from "../models/UserModel.js";

export const getBorrows = async (req, res) => {
    try {
        let response;
        response = await Borrow.findAll({
            attributes: ["uuid", "lab", "matkul", "dosen", "hari", "mulai", "berakhir", "sks", "kelas"],
            // where: {
            //     lab: laboran.lab
            // }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
}

export const getBorrowsById = async (req, res) => {
    try {
        const response = await Borrow.findOne({
            where:{
                uuid : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getBorrowsByLab = async (req, res) => {
    try {
        const laboran = await Borrow.findOne({
            where: {
                lab: req.params.lab
            }
        })
        if(!laboran) return res.status(404).json({msg: "Data Tidak Ditemukan!"})
        let response;
        response = await Borrow.findAll({
            attributes: ["uuid", "lab", "matkul", "dosen", "hari", "mulai", "berakhir", "sks", "kelas"],
            where: {
                lab: laboran.lab
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createBorrows = async (req, res) => {
    const {lab, matkul, dosen, kelas, sks, mulai, berakhir, hari} = req.body
    try {
        await Borrow.create({
            lab: lab,
            matkul: matkul,
            dosen: dosen,
            kelas: kelas,
            sks: sks,
            mulai: mulai,
            berakhir: berakhir,
            hari: hari
        })
        res.status(201).json({msg: "Jadwal Created Succes!"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
    
}

export const updateBorrows = async (req, res) => {
    const jadwal = await Borrow.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!jadwal) return res.status(404).json({msg: "Jadwal tidak ditemukan"});
    const {lab, matkul, dosen, kelas, sks, mulai, berakhir, hari} = req.body
    
    try {
        await Borrow.update({
            lab: lab,
            matkul: matkul,
            dosen: dosen,
            kelas: kelas,
            sks: sks,
            mulai: mulai,
            berakhir: berakhir,
            hari: hari
        },{
            where:{
                id: jadwal.id
            }
        });
        res.status(200).json({msg: "Jadwal Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
    
}

export const deleteBorrows = async (req, res) => {
    const jadwal = await Borrow.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!jadwal) return res.status(404).json({msg: "Borrow tidak ditemukan"});
    try {
        await Borrow.destroy({
            where:{
                id: jadwal.id
            }
        });
        res.status(200).json({msg: "Borrow Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
    
}