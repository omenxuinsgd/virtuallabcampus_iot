import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import User from "./UserModel.js"

const {DataTypes} = Sequelize

const Product = db.define('product', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Dipinjam',
        validate: {
            notEmpty: true
        }
    },
    tgl_pinjam: {
        type: DataTypes.DATE,
        allowNull: false,
        timezone: true,
        validate: {
            notEmpty: true
        }
    },
    tenggat: {
        type: DataTypes.DATE,
        allowNull: false,
        timezone: true,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
})

User.hasMany(Product)
Product.belongsTo(User, {foreignKey: 'userId'})

export default Product