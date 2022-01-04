const db = require('../database/conection')
const { DataTypes } = require('sequelize')

const Computadora = db.define('computadora',{
    sistema_operativo: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    procesador: DataTypes.STRING,
    disco_duro: DataTypes.INTEGER,
    biblioteca_id: DataTypes.INTEGER,
    ocupado: DataTypes.INTEGER,
    estado_id: DataTypes.INTEGER
},{
    tableName: 'computadora',
    createdAt: false,
    updatedAt: false
})

module.exports = Computadora