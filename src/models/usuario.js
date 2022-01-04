const db = require('../database/conection')
const { DataTypes } = require('sequelize')

const Usuario = db.define('usuario',{
    cedula: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    correo: DataTypes.STRING,
    clave: DataTypes.STRING,
    url_img: DataTypes.STRING,
    rol_id: DataTypes.INTEGER,
    facultad: DataTypes.STRING
},
{
    tableName:'usuario',
    createdAt:false,
    updatedAt: false
})

module.exports = Usuario