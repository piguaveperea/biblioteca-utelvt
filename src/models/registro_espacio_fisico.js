const db = require('../database/conection')
const { DataTypes } = require('sequelize')

const RegistroEspacioFisico = db.define('registro_espacio_fisico',{
    biblioteca_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    entrada: DataTypes.TIME,
    salida: DataTypes.TIME
},{
    tableName: 'registro_espacio_fisico',
    createdAt:false,
    updatedAt:false
})