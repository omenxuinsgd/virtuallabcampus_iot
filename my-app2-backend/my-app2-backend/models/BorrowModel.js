import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const {DataTypes} = Sequelize

const Borrow = db.define('Jadwal', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lab: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    matkul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    dosen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    sks: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    hari: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    mulai: {
        type: DataTypes.DATE,
        allowNull: false,
        timezone: true,
        validate: {
            notEmpty: true
        }
    },
    berakhir: {
        type: DataTypes.DATE,
        allowNull: false,
        timezone: true,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
})

export default Borrow