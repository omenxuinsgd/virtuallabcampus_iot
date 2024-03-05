import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const News = db.define('artikel',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
},{
    freezeTableName: true
});

export default News;