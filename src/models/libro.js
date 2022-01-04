const db = require('../database/conection')
const { DataTypes } = require('sequelize')

const Libro = db.define('libro',{
    codigo_barra: DataTypes.STRING,
    biblioteca_id: DataTypes.INTEGER,
    titulo:DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    pais: DataTypes.STRING,
    bloque: DataTypes.INTEGER,
    estanteria: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    ocupado: DataTypes.INTEGER,
    cute: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
    estado_id: DataTypes.INTEGER
},{
    tableName:'libro',
    createdAt: false,
    updatedAt: false
})
    
module.exports = Libro

