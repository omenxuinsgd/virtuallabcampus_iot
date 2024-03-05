import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Lab = db.define('lab_gambar',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: DataTypes.STRING,
    judul: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    dosen: DataTypes.STRING
},{
    freezeTableName: true
});

export default Lab;