import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Fasilitas = db.define('fasilitas',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    lab: DataTypes.STRING,
    jumlah: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Fasilitas;