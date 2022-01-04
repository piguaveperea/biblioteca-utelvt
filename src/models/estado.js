const db = require('../database/conection')
const { DataTypes } = require('sequelize')


const Estado = db.define('estado',{
    estado: DataTypes.STRING
},{
    tableName: 'estado',
    updatedAt: false,
    createdAt: false
})

module.exports = Estado