const db = require('../database/conection')
'use strict'
const { DataTypes } = require('sequelize')
const Biblioteca = db.define('biblioteca',{
    campus: DataTypes.STRING,
    ubicacion: DataTypes.STRING
},{
    tableName: 'biblioteca',
    createdAt: false,
    updatedAt: false
})

module.exports = Biblioteca