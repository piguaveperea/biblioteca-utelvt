const db = require('../database/conection')
const { DataTypes } = require('sequelize')
const Libro = require('./libro')

const RegistroComputadora = db.define('detalle_computadora', {
     biblioteca_id: DataTypes.INTEGER,
     computadora_id: DataTypes.INTEGER,
     usuario_id: DataTypes.INTEGER,
     fecha: DataTypes.DATE,
     incio: DataTypes.TIME,
     final: DataTypes.TIME
},{
    tableName: 'detalle_computadora',
    createdAt:false,
    updatedAt:false
})



module.exports = RegistroComputadora